import {I_Tenant} from '../packages/indexing/reducer';
import {Indexer} from '../data/tenants/indexers';
import {useCallback} from 'react';

function TenantInfoRenderer({children, attr}: { children: any, attr: string }) {
    switch (attr) {
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
            return <div style={{color}}>{children}</div>
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
        <div className={className} key={className} itemScope itemType="https://schema.org/Person">
            <TenantInfoRenderer attr={attr}>{selector(tenant)}</TenantInfoRenderer>
        </div>
    ), []);

    const elements = indexers.map(mapper);

    return <div className="leaseInfo byTenant">{elements}</div>;
}