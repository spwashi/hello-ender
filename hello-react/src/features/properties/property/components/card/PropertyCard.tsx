import {I_Property} from '../../../../../core/types/models';
import {PropertyContextProvider} from '../../context/components/Provider';
import {PropertyBody} from './PropertyBody';
import './styles/propertyCard.scss';
import {useContext} from 'react';
import {ActivationContextState} from '../../../../../context/activation/context';
import classNames from 'classnames';
import classes from './styles/_util/active.module.scss';

/**
 * Card version of a Property
 *
 * @param property
 * @constructor
 */
export function PropertyCard({property}: { property: I_Property }) {
    const isActive  = useContext(ActivationContextState).activeProperty === property;
    const className = classNames({[classes.active]: isActive});
    return (
        <PropertyContextProvider property={property}>
            <div className={`cardContext ${className}`} aria-selected={isActive ? 'true' : 'false'}>
                <PropertyBody/>
            </div>
        </PropertyContextProvider>
    );
}