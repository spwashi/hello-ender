import {I_Property} from '../../../../../core/types/models';
import styles from './styles/propertyCardList.module.scss';
import {PropertyCard} from '../card/PropertyCard';

export function PropertyList({properties}: { properties: I_Property[] | null }) {
    if (!properties) return <>Loading...</>;
    return (
        <ul className={styles.propertyCardList}>{
            properties.map(
                property =>
                    <li key={property.id}>
                        <PropertyCard property={property}/>
                    </li>,
            )
        }</ul>
    );
}