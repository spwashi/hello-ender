import {I_Property} from '../../../../../../core/types/models';
import '../styles/leaseInfo.css';
import {isLeaseError, usePropertyLeaseIndex} from '../hooks/usePropertyLeaseIndex';
import {useTenantIndexers} from '../hooks/useTenantIndexers';
import {TenantInfo} from './TenantInfo';
import {TenantInfoIndexerHead} from './TenantInfoIndexerHead';

/**
 * Widget that displays information about a property's leases
 *
 * @param property
 * @constructor
 */
export function PropertyLeaseList({property}: { property: Pick<I_Property, 'id'> & Partial<I_Property> }) {
    const index         = usePropertyLeaseIndex(property);
    const indexHasError = isLeaseError(index);
    const indexers      = useTenantIndexers(!indexHasError ? index : undefined);

    if (indexHasError) return <div>Error</div>


    return (
        <div className="leaseInfoList byTenant">
            <div className="head">{
                indexers
                    .map(indexer => <TenantInfoIndexerHead key={indexer[0]} head={indexer[0]}/>)
            }</div>
            <div className="body">{
                Object.values(index?.contacts ?? {})
                      .map(tenant => <TenantInfo key={tenant.contact.id} tenant={tenant} indexers={indexers}/>)
                      .filter(Boolean)
            }</div>
        </div>
    )
}