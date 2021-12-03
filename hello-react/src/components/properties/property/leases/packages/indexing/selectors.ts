import {Contact, I_Property_Lease} from '../../../../../../core/types/models';

export const contact_selectPrimaryKey = (contact: Contact) => contact.id;
export const lease_selectPrimaryKey   = (lease: I_Property_Lease) => lease.id;