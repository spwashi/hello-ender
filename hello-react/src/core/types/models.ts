type DateString = string;
type Name = string;
type Address1 = string;
type Address2 = string;
type Sqft = number;
type OccupiedStatus = boolean;
type BaseRent = string;

export interface I_Property {
    id: number,
    name: Name,
    address1: Address1,
    address2: Address2,
    sqft: Sqft,
    isOccupied: OccupiedStatus,
    baseRent: BaseRent
}

export enum I_Property_LeaseStatus {
    expired = 'EXPIRED',
    active  = 'ACTIVE'
}

type CompanyName = string;

export type Tag =
    'PRIMARY'
    | 'TENANT'
    | 'EMERGENCY';

type Phone = string;
type Email = string;
type ContactId = string

export interface Contact {
    id: ContactId,
    phone: Phone,
    email: Email,
    tags: Tag[]
}

interface ContactMap {
    [name: string]: Contact
}

export interface I_Property_Lease {
    id: string,
    status: I_Property_LeaseStatus,
    companyName: CompanyName,
    startDate: DateString,
    inclusiveEndDate: DateString,
    contacts: ContactMap
}


export type HydratedLease =
    Omit<I_Property_Lease, 'contacts'>
    & {
        contacts: string[];
        primaryContact?: string;
        emergencyContact?: string;
    }

export type HydratedContact =
    Omit<Contact, 'tags'>
    & { tags: Set<Tag>; name: string };
