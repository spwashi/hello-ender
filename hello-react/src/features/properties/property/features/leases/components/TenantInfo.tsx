import {I_Tenant} from '../packages/indexing/reducer';
import {Indexer} from '../data/tenants/indexers';
import {useCallback} from 'react';

/**
 * Renders a tenant with properties arranged by an "Indexer"
 * @param tenant
 * @param indexers
 * @constructor
 */
export function TenantInfo({tenant, indexers}: { tenant: I_Tenant, indexers: Indexer[] }) {
    const mapper = useCallback(([className, selector]: Indexer) => (
        <div className={className} key={className}>
            {selector(tenant)}
        </div>
    ), []);

    const elements = indexers.map(mapper);

    return <div className="leaseInfo byTenant">{elements}</div>;
}