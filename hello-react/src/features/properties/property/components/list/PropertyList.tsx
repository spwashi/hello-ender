import {I_Property} from '../../../../../core/types/models';
import styles from './styles/propertyCardList.module.scss';
import {PropertyCard} from '../card/PropertyCard';
import React from 'react';

export const PropertyList =
                 React.memo(
                     ({properties}: { properties: I_Property[] | null }) => {
                         if (!properties) return <>Loading...</>;
                         let listItems = properties.map(
                             property =>
                                 <li key={property.id}>
                                     <PropertyCard property={property}/>
                                 </li>,
                         );
                         return <ul className={styles.propertyCardList}>{listItems}</ul>;
                     },
                 );