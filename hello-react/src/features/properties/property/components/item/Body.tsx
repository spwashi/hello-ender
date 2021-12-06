import {useCallback, useContext, useMemo} from 'react';
import {PropertyContext} from '../../context/context';
import {ActivationContextDispatch, ActivationContextState} from '../../../../../context/activation/context';
import {property_selectAddress, property_selectBaseRentNumber_mut, property_selectSqft, property_selectSqftAnnualPrice_mut, property_selectSqftMonthlyPrice_mut} from '../../data/selectors';
import classnames from 'classnames';

// Create our number formatter.
const moneyFormatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
const toMoney        = (n: number) => moneyFormatter.format(n);

/**
 * Displays information about a property
 */
export default function Body() {
    const {property}           = useContext(PropertyContext)
    const isActive             = useContext(ActivationContextState).activeProperty === property;
    const dispatch             = useContext(ActivationContextDispatch);
    const advanceActivityState = useCallback(() => {
        if (!(property && dispatch)) return;
        dispatch({type: isActive ? 'deactivate' : 'activate', payload: property})
    }, [isActive, dispatch, property]);

    const sqftPriceMo = useMemo(() => !property ? null : toMoney(property_selectSqftMonthlyPrice_mut(property)),
                                [property]);
    const sqftPriceAn = useMemo(() => !property ? null : toMoney(property_selectSqftAnnualPrice_mut(property)),
                                [property]);

    if (!property) return null;
    const {isOccupied}  = property;
    const bodyClassName =
              classnames(
                  'property-body',
                  {
                      occupied: isOccupied,
                      active:   isActive,
                  },
              );
    return (
        <div id={`property--${property.id}--body`} className={bodyClassName}>
            <button onClick={advanceActivityState}>View Property Leases</button>
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
                    <div
                        className="sqft"
                        data-unit="sqft."
                    >
                        {property_selectSqft(property)}
                    </div>
                    <div
                        className="price-sqft-mo"
                        data-currency="$"
                        data-unit="sqft/mo"
                    >
                        {sqftPriceMo}
                    </div>
                    <div
                        className="price-sqft-yr"
                        data-currency="$"
                        data-unit="sqft/yr"
                    >
                        {sqftPriceAn}
                    </div>
                </div>
            </div>
        </div>
    )
}