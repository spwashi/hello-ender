import {I_Property} from '../../../../../../core/types/models';
import '../styles/leaseInfo.scss';
import {isLeaseError, usePropertyLeaseIndex} from '../hooks/usePropertyLeaseIndex';
import {useTenantIndexers} from '../hooks/useTenantIndexers';
import {TenantInfo} from './tenant/TenantInfo';
import {TenantInfoIndexerHead} from './tenant/TenantInfoIndexerHead';
import {useMemo} from 'react';

/**
 * Widget that displays information about a property's leases
 *
 * @param property
 * @constructor
 */
export function PropertyLeaseList({property}: { property: Pick<I_Property, 'id'> & Partial<I_Property> }) {
    const index               = usePropertyLeaseIndex(property);
    const indexHasError       = isLeaseError(index);
    const indexers            = useTenantIndexers(!indexHasError ? index : undefined);
    const representedStatuses = useMemo(() => !indexHasError ? new Set(Object.values(index.leases).map(lease => lease.status))
                                                             : new Set, [!indexHasError ? index?.leases : null]);

    if (indexHasError) return <div>Error</div>

    const headElements =
              indexers
                  .map(indexer =>
                           <TenantInfoIndexerHead
                               key={indexer[0].className}
                               head={indexer[0]}
                           />);
    const bodyElements =
              Object.values(index.contacts)
                    .map(tenant =>
                             <TenantInfo
                                 key={tenant.contact.id}
                                 tenant={tenant}
                                 indexers={indexers}
                             />)
                    .filter(Boolean);
    return (
        <div className="leaseInfoList byTenant">
            <div className="legendContainer">
                <div className="title">Legend</div>
                <div className="legend">
                    {
                        Array
                            .from(representedStatuses)
                            .map(
                                status =>
                                    <div
                                        data-legendKey={`${status}`[0] + `${status}`.slice(1).toLowerCase()}
                                        className={`status--${(`${status}`).toLowerCase()}`}
                                    />,
                            )
                    }
                </div>
            </div>
            <div className="head">{headElements}</div>
            <div className="body">{bodyElements.length ? bodyElements : null}</div>
        </div>
    )
}