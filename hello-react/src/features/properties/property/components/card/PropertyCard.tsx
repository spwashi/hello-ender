import {I_Property} from '../../../../../core/types/models';
import {PropertyContextProvider} from '../../context/components/Provider';
import {PropertyBody} from './PropertyBody';
import './styles/propertyCard.scss';

export function PropertyCard({property}: { property: I_Property }) {
    return (
        <PropertyContextProvider property={property}>
            <div className="cardContext">
                <PropertyBody/>
            </div>
        </PropertyContextProvider>
    );
}