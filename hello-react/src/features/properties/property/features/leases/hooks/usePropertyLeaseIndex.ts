import {I_Property, I_Property_Lease} from '../../../../../../core/types/models';
import {IndexedLeaseAggregate, leaseIndexReducer} from '../packages/indexing/reducer';
import {findEndpoint} from '../../../../../../core/endpoints';
import {useEndpointData} from '../../../../../../core/endpoints/hooks/useEndpointData';
import {useMemo} from 'react';
import {getEmptyLeaseAggregator} from '../data/tenants/selectors';

/**
 * Returns whether a variable is an error we know how to handle
 * @param e
 */
export const isLeaseError = (e: any): e is Error => e?.message && e?.stack;

/**
 * Fetches information about a property's leases
 *
 * @param property
 */
export function usePropertyLeaseIndex(property: Pick<I_Property, 'id'> & Partial<I_Property>): IndexedLeaseAggregate | Error {
    const endpoint         = property ? findEndpoint({route: 'properties/:id/leases', id: property.id}) : null;
    const rawLeaseInfo     = useEndpointData<I_Property_Lease[]>(endpoint);
    const indexedLeaseInfo = useMemo(() => rawLeaseInfo?.reduce(leaseIndexReducer, getEmptyLeaseAggregator()), [rawLeaseInfo]);

    if (isLeaseError(rawLeaseInfo) || !rawLeaseInfo) {
        const emptyLeaseInfo: IndexedLeaseAggregate = {
            leases:   {},
            contacts: {},
        };
        return rawLeaseInfo ?? emptyLeaseInfo;
    }

    return indexedLeaseInfo as IndexedLeaseAggregate;
}