import {I_Property} from '../../../../core/types/models';
import {PropertyContextProvider} from '../context/components/Provider';
import {PropertyCardActivator} from './PropertyCardActivator';


export function PropertyCard({property}: { property: I_Property }) {
    return (
        <PropertyContextProvider property={property}>
            <PropertyCardActivator/>
        </PropertyContextProvider>
    );
}