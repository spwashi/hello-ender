import {I_Property} from '../../../../../core/types/models';
import styles from './styles/propertyCardList.module.scss';
import {PropertyCard} from '../card/PropertyCard';
import React, {useContext} from 'react';
import {ConnectedPropertyLeaseList} from '../../features/leases/features/lease-list/control/ConnectedPropertyLeaseList';
import {useIsMobile} from '../../../../../util/hooks/useWindowWidth';
import {ActivationContextState} from '../../../../../context/activation/context';

export const PropertyList =
                 React.memo(
                     ({properties}: { properties: I_Property[] | null }) => {
                         const isMobile         = useIsMobile();
                         const {activeProperty} = useContext(ActivationContextState)
                         if (!properties) return <>Loading...</>;
                         const listItems =
                                   properties.map(
                                       property => {
                                           const displayLeases = isMobile && activeProperty === property;
                                           return (
                                               <li key={property.id}>
                                                   <PropertyCard property={property}/>
                                                   {displayLeases ? <ConnectedPropertyLeaseList/> : null}
                                               </li>
                                           );
                                       },
                                   );
                         return <ul className={styles.propertyCardList}>{listItems}</ul>;
                     },
                 );