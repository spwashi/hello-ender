import {I_Property} from '../../../../../../core/types/models';
import '../styles/leaseInfo.scss';
import {isLeaseError, usePropertyLeaseIndex} from '../hooks/usePropertyLeaseIndex';
import {useTenantIndexers} from '../hooks/useTenantIndexers';
import {TenantInfo} from './tenant/TenantInfo';
import {TenantInfoIndexerHead} from './tenant/TenantInfoIndexerHead';
import {StatusLegend} from './StatusLegend';
import {useAllPossibleStatusesBasedOnIndexedLeases} from '../hooks/useAllPossibleStatusesBasedOnIndexedLeases';

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
    const representedStatuses = useAllPossibleStatusesBasedOnIndexedLeases(index);

    if (indexHasError) {
        return <div>Error</div>
    }

    const headElements = indexers.map(indexer => <TenantInfoIndexerHead
        key={indexer[0].className}
        head={indexer[0]}
    />);

    const bodyElements = Object.values(index.contacts).map(tenant => <TenantInfo
        key={tenant.contact.id}
        tenant={tenant}
        indexers={indexers}
    />).filter(Boolean);

    const legendTitle = `legendTitle--property__${property.id}`;

    return (
        <div className="leaseInfoList byTenant">
            <div className="legendContainer">
                <div className="legend" aria-labelledby={legendTitle}>
                    <StatusLegend statuses={representedStatuses}/>
                </div>
                <div className="title" id={legendTitle}>Legend</div>
            </div>
            <div className="head">{headElements}</div>
            <div className="body">{bodyElements.length ? bodyElements : null}</div>
        </div>
    )
}