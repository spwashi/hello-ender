import {I_Tenant, IndexedLeaseAggregate} from '../packages/indexing/reducer';
import {useCallback} from 'react';
import {tenant_selectEndDate, tenant_selectLeaseStatus, tenant_selectName, tenant_selectPrimaryContact, tenant_selectStartDate} from '../data/tenants/selectors';
import {Indexer} from '../data/tenants/indexers';

export function useTenantIndexers(indexedLeaseInfo: IndexedLeaseAggregate | undefined) {
    const _selectPrimaryContact = useCallback((tenant: I_Tenant) => tenant_selectPrimaryContact(tenant, indexedLeaseInfo),
                                              [indexedLeaseInfo]);

    const tenant_nameIndexer: Indexer           = ['tenant', tenant_selectName];
    const tenant_startDateIndexer: Indexer      = ['startDate', tenant_selectStartDate];
    const tenant_endDateIndexer: Indexer        = ['endDate', tenant_selectEndDate];
    const tenant_leaseStatusIndexer: Indexer    = ['status', tenant_selectLeaseStatus];
    const tenant_primaryContactIndexer: Indexer = ['primaryContact', _selectPrimaryContact];

    return [
        tenant_nameIndexer,
        tenant_startDateIndexer,
        tenant_endDateIndexer,
        tenant_leaseStatusIndexer,
        tenant_primaryContactIndexer,
    ];
}