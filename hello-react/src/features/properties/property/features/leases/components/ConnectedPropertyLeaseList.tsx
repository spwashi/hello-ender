import {PropertyContextProvider} from '../../../context/components/Provider';
import {PropertyContextConsumer} from '../../../context/components/Consumer';
import styles from '../../../../../../components/app/styles/App.module.css';
import {Helmet} from 'react-helmet';
import {PropertyLeaseList} from './PropertyLeaseList';

export function ConnectedPropertyLeaseList() {
    return (
        <PropertyContextProvider>
            <PropertyContextConsumer>
                {
                    ({property}) => {
                        if (property) {
                            return (
                                <section className={styles.propertyLeaseListContainer}>
                                    <h2>{property.name} Leases</h2>
                                    <Helmet>
                                        <title>{property.name} Leases</title>
                                    </Helmet>
                                    <PropertyLeaseList key={property.id} property={property}/>
                                </section>
                            );
                        } else {return null;}
                    }
                }
            </PropertyContextConsumer>
        </PropertyContextProvider>
    );
}