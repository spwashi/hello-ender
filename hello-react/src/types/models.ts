export type I_Property = {
    id: number,
    name: string,
    address1: string,
    address2: string,
    sqft: number,
    isOccupied: boolean,
    baseRent: string
};

type IPropertyDetailStatus =
    'EXPIRED'
    | 'ACTIVE';

type DateString = string;

export type I_PropertyDetail = {
    id: string,
    status: IPropertyDetailStatus,
    companyName: string,
    startDate: DateString,
    inclusiveEndDate: DateString,
};

type I_TAG =
    'PRIMARY'
    | 'TENANT'
    | 'EMERGENCY';

export type IContact = {
    id: string,
    phone: string,
    email: string,
    tags: I_TAG[]
}