import {I_Tenant} from '../../packages/indexing/reducer';
import {Indexer} from '../../data/tenants/indexers';
import {useCallback} from 'react';
import './styles/tenant.scss';
import {AbbreviatedMobileText} from '../../../../../../../util/components/AbbreviatedMobileText';
import {useIsMobile} from '../../../../../../../util/hooks/useWindowWidth';
import {tenant_selectLeaseStatus} from '../../data/tenants/selectors';

function TenantInfoRenderer({children, attr}: { children: any, attr: string }) {
    const isMobile = useIsMobile();
    switch (attr) {
        case 'startDate':
        case 'endDate':
            if (typeof children !== 'string') return children;
            return (
                <time dateTime={children} data-abbreviate="true">{
                    children.split('-').map(
                        (date: string, key: number) => {
                            const hyphen  = key ? '-' : '';
                            const element = <span key={date + key}>{isMobile ? `${date}`.slice(-2) : date}</span>;
                            return <>{hyphen}{element}</>;
                        },
                    )
                }</time>
            )
        case 'primaryContact':
        case 'tenant':
            let inner;
            if (typeof children === 'string') {
                if (children === 'unknown') {
                    inner = null;
                } else {
                    inner = !isMobile ? children : <AbbreviatedMobileText scheme="last" text={children}/>;
                }
            } else {
                inner = children;
            }
            return <div itemScope itemType="https://schema.org/Person">{inner}</div>
        case 'status':
            let color: string;
            switch (children) {
                case 'UPCOMING':
                    color = 'blue';
                    break;
                case 'EXPIRED':
                    color = 'red';
                    break;
                case 'ACTIVE':
                    color = 'green';
                    break;
                default:
                    color = 'grey';
                    break;
            }
            return <div style={{color}}>{children.toLowerCase()}</div>
        default:
            return children;
    }
}

/**
 * Renders a tenant with properties arranged by an "Indexer"
 * @param tenant
 * @param indexers
 * @constructor
 */
export function TenantInfo({tenant, indexers}: { tenant: I_Tenant, indexers: Indexer[] }) {
    const mapper = useCallback(([{className, attr}, selector]: Indexer) => (
        <div className={className} key={className}>
            <TenantInfoRenderer attr={attr}>{selector(tenant)}</TenantInfoRenderer>
        </div>
    ), []);

    const elements        = indexers.map(mapper);
    const status          = tenant_selectLeaseStatus(tenant);
    const statusClassName = `status--${status?.toLowerCase()}`;
    return <div className={`leaseInfo byTenant ${statusClassName}`}>{elements}</div>;
}