import {I_Property} from '../../../../../core/types/models';
import styles from './styles/propertyCardList.module.scss';
import {PropertyCard} from '../card/PropertyCard';
import React, {useContext} from 'react';
import {ConnectedPropertyLeaseList} from '../../features/leases/components/ConnectedPropertyLeaseList';
import {useIsMobile} from '../../../../../util/hooks/useWindowWidth';
import {ActivationContextState} from '../../../../../context/activation/context';

export const PropertyList =
                 React.memo(
                     ({properties}: { properties: I_Property[] | null }) => {
                         const isMobile         = useIsMobile();
                         const {activeProperty} = useContext(ActivationContextState)
                         if (!properties) return <>Loading...</>;
                         let listItems = properties.map(
                             property =>
                                 <li key={property.id}>
                                     <PropertyCard property={property}/>
                                     {isMobile && activeProperty === property ? <ConnectedPropertyLeaseList/> : null}
                                 </li>,
                         );
                         return <ul className={styles.propertyCardList}>{listItems}</ul>;
                     },
                 );