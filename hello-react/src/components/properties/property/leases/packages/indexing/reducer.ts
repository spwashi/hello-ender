import {HydratedContact, HydratedLease, I_Property_Lease} from '../../../../../../core/types/models';
import {contact_selectPrimaryKey, lease_selectPrimaryKey} from './selectors';
import {hydrateContact, hydrateLease} from './hydration';

export type IndexedLeaseAggregate = {
    // todo remove this if a person cannot have more than one lease
    leases: {
        [k: string]: HydratedLease
    },
    contacts: {
        [k: string]: {
            contact: HydratedContact,
            lease: HydratedLease | null,
        }
    }
};
/**
 * Adds the data about one lease to an aggregate object
 *
 * @param all
 * @param lease
 */
export function leaseIndexReducer(all: IndexedLeaseAggregate, lease: I_Property_Lease) {
    const leaseid = lease_selectPrimaryKey(lease);

    all.leases[leaseid]                = hydrateLease(lease);
    const hydratedLease: HydratedLease = all.leases[leaseid];

    Object
        .entries(lease.contacts)
        .forEach(([name, contact]) => {
            const contactid   = contact_selectPrimaryKey(contact);
            const nameleaseid = `${contactid}--${leaseid}`;

            const hydratedContact: HydratedContact = Object.assign({}, all.contacts[nameleaseid] ?? {}, hydrateContact(contact, name));
            if (hydratedContact.tags.has('PRIMARY')) hydratedLease.primaryContact = nameleaseid;
            if (hydratedContact.tags.has('EMERGENCY')) hydratedLease.emergencyContact = nameleaseid;
            all.contacts[contactid] = {
                contact: hydratedContact,
                lease:   hydratedLease,

            };
            hydratedLease.contacts.push(nameleaseid);
        })

    return all
}