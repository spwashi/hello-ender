import {useCallback, useContext, useMemo} from 'react';
import {PropertyContext} from '../../context/context';
import {ActivationContextDispatch, ActivationContextState} from '../../../../../context/activation/context';
import {property_selectAddress, property_selectBaseRentNumber_mut, property_selectSqft, property_selectSqftAnnualPrice_mut, property_selectSqftMonthlyPrice_mut} from '../../data/selectors';

// Create our number formatter.
const moneyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
const toMoney        = (n: number) => moneyFormatter.format(n);

/**
 * Displays information about a property
 */
export function PropertyBody() {
    const {property}      = useContext(PropertyContext)
    const activationState = useContext(ActivationContextState);
    const dispatch        = useContext(ActivationContextDispatch);
    const activate        = useCallback(() => {
        if (!(property && dispatch)) return;
        dispatch({type: 'activate', payload: property})
    }, [dispatch]);

    const sqftPriceMo = useMemo(() => !property ? null : toMoney(property_selectSqftMonthlyPrice_mut(property)),
                                [property]);
    const sqftPriceAn = useMemo(() => !property ? null : toMoney(property_selectSqftAnnualPrice_mut(property)),
                                [property]);

    if (!property) return null;
    return (
        <div id={`property--${property.id}--body`} className="property-body">
            <button onClick={activate}>View Property Leases</button>
            <div className="head">
                <div className="title">{property.name}</div>
            </div>
            <div className="body">
                <div className="infoGroup address_rent">
                    <div className="address">{
                        property_selectAddress(property)
                            .map(line => <div key={line}>{line}</div>)
                    }</div>
                    <div className="baseRent">{toMoney(property_selectBaseRentNumber_mut(property))}</div>
                </div>
                <div className="infoGroup sqftMetrics">
                    <div className="sqft" data-unit="sqft.">{property_selectSqft(property)}</div>
                    <div className="css-price-calc price-sqft-mo" data-currency="$"
                         data-unit="sqft/mo">{sqftPriceMo}</div>
                    <div className="css-price-calc price-sqft-yr" data-currency="$"
                         data-unit="sqft/yr">{sqftPriceAn}</div>
                </div>
            </div>
        </div>
    )
}