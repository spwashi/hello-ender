import {I_Tenant, IndexedLeaseAggregate} from '../../packages/indexing/reducer';

export function tenant_selectName(tenant: I_Tenant) {
    return tenant.contact.name;
}
export function tenant_selectStartDate(tenant: I_Tenant) {
    return tenant.lease.startDate;
}
export function tenant_selectEndDate(tenant: I_Tenant) {
    return tenant.lease.inclusiveEndDate;
}
export function tenant_selectLeaseStatus(tenant: I_Tenant) {
    return tenant.lease.status;
}
export function getEmptyLeaseAggregator() {
    return {contacts: {}, leases: {}};
}
export function tenant_selectPrimaryContact(tenant: I_Tenant, index: IndexedLeaseAggregate = getEmptyLeaseAggregator()) {
    const contactid     = tenant.lease.primaryContact;
    const primaryTenant = index.contacts[contactid ?? 'unknown'];
    return primaryTenant ? primaryTenant.contact.name : 'unknown';
}