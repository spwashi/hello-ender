import {Contact, I_Property_Lease} from '../../../../../../core/types/models';

export function hydrateContact(contact: Contact, name: string) {
    return Object.assign(
        {},
        contact,
        {
            name,
            tags: new Set(contact.tags),
        },
    );
}
export function hydrateLease(lease: I_Property_Lease) {
    return Object.assign({}, lease, {contacts: [] as string[]});
}