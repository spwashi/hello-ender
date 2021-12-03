import {I_Property} from '../../../../core/types/models';

export const property_selectAddress  = (property: I_Property) => [property.address1, property.address2];
export const property_selectBaseRent = (property: I_Property) => property.baseRent ?? '$ xx.xx';
export const property_selectSqft     = (property: I_Property) => property.sqft;

export const property_selectBaseRentNumber_mut   =
                 (property: I_Property & any & { baseRentNumber?: number }) => {
                     if (property.baseRentNumber != null) {
                         return property.baseRentNumber;
                     }

                     return property.baseRentNumber = +property_selectBaseRent(property).replace((/[$,]/g), '');
                 };
export const property_selectSqftAnnualPrice_mut  =
                 (property: I_Property & any & { annualSqft?: number }) => {
                     if (property.annualSqft != null) {
                         return property.annualSqft;
                     }
                     let sqft       = property_selectSqft(property);
                     let annualRent = +property_selectBaseRent(property).replace((/[$,]/g), '') || 1;
                     return property.annualSqft = Math.round(100 * annualRent / sqft) / 100;
                 };
export const property_selectSqftMonthlyPrice_mut = (property: I_Property & any & { monthlySqft?: number }) => {
    if (property.monthlySqft != null) {
        return property.monthlySqft;
    }
    const sqftPricePerYear = property_selectSqftAnnualPrice_mut(property);
    return property.monthlySqft = Math.round(100 * sqftPricePerYear / 12) / 100;
}
