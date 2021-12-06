import {IndexedLeaseAggregate} from '../packages/indexing/reducer';
import {isLeaseError} from './usePropertyLeaseIndex';
import {useMemo} from 'react';

/**
 * Select all of the statuses that are represented by the leases in the index
 *
 * @param index
 */
export function useAllPossibleStatusesBasedOnIndexedLeases(index: IndexedLeaseAggregate | Error): Set<string> {
    const indexHasError = isLeaseError(index);
    const leases        = !indexHasError ? index.leases : null;
    return useMemo(() => !indexHasError
                         ? new Set(Object.values(leases ?? {}).map(lease => lease.status))
                         : new Set(),
                   [leases, indexHasError]);
}