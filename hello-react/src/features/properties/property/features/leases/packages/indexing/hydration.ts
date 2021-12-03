import {Contact, HydratedContact, HydratedLease, I_Property_Lease} from '../../../../../../../core/types/models';

/**
 * Given a Contact object that has only been deserialized,
 *  return a new object with runtime-specific properties
 *
 * @param contact
 * @param name
 */
export function hydrateContact(contact: Contact, name: string): HydratedContact {
    return Object.assign(
        {},
        contact,
        {
            name,
            tags: new Set(contact.tags),
        },
    );
}

/**
 * Given a Lease object that has only been deserialized,
 *  return an object with runtime-specific properties
 *
 * @param lease
 */
export function hydrateLease(lease: I_Property_Lease): HydratedLease {
    return Object.assign({}, lease, {contacts: [] as string[]});
}