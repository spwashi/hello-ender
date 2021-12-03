import styles from './styles/App.module.css';
import {useEndpointData} from '../../core/endpoints/hooks/useEndpointData';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import {PropertyContextProvider} from '../../features/properties/property/context/components/Provider';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyContextConsumer} from '../../features/properties/property/context/components/Consumer';
import {PropertyList} from '../../features/properties/property/components/list/PropertyList';
import {PropertyLeaseList} from '../../features/properties/property/features/leases/components/PropertyLeaseList';
import {Helmet} from 'react-helmet';

function App() {
    const properties = useEndpointData<I_Property[] | null>(findEndpoint({route: 'properties/'}));
    return (
        <div className={styles.app}>
            <main>
                <h1>Properties</h1>

                <ActivationProvider>
                    <section className={styles.propertyCardListContainer}>
                        <PropertyList properties={properties}/>
                    </section>
                    <section className={styles.propertyLeaseListContainer}>
                        <PropertyContextProvider>
                            <PropertyContextConsumer>
                                {
                                    ({property}) => {
                                        if (property) {
                                            return (
                                                <>
                                                    <h2>{property.name} Leases</h2>
                                                    <Helmet>
                                                        <title>{property.name} Leases</title>
                                                    </Helmet>
                                                    <PropertyLeaseList key={property.id} property={property}/>
                                                </>
                                            );
                                        } else {return null;}
                                    }
                                }
                            </PropertyContextConsumer>
                        </PropertyContextProvider>
                    </section>
                </ActivationProvider>
            </main>
        </div>
    );
}

export default App;
