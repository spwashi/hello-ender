import {I_Tenant} from '../../../../../packages/indexing/reducer';
import {Indexer} from '../../../../../../../../../../util/types/indexers';
import {useCallback} from 'react';
import '../../../styles/tenant.scss';
import {tenant_selectLeaseStatus} from '../../../../../data/tenants/selectors';
import TenantInfoRenderer from './switch';

/**
 * Renders a tenant with properties arranged by an "Indexer"
 * @param tenant
 * @param indexers
 * @constructor
 */
export function TenantInfo({tenant, indexers}: { tenant: I_Tenant, indexers: Indexer[] }) {
    const mapper = useCallback(([{className, attrName}, selector]: Indexer) => (
        <div className={className} key={className}>
            <TenantInfoRenderer attr={attrName}>{selector(tenant)}</TenantInfoRenderer>
        </div>
    ), [tenant]);

    const elements        = indexers.map(mapper);
    const status          = tenant_selectLeaseStatus(tenant);
    const statusClassName = `status--${status?.toLowerCase()}`;
    return <div className={`leaseInfo byTenant ${statusClassName}`}>{elements}</div>;
}