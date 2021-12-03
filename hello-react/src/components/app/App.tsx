import styles from './styles/App.module.css';
import {useEndpointData} from '../../core/endpoints/hooks/useEndpointData';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import {PropertyContextProvider} from '../../features/properties/property/context/components/Provider';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyContextConsumer} from '../../features/properties/property/context/components/Consumer';
import {PropertyLeaseList} from '../../features/properties/property/features/leases/components/PropertyLeaseList';
import {PropertyList} from '../../features/properties/property/components/list/PropertyList';


function App() {
    const properties = useEndpointData<I_Property[] | null>(findEndpoint({route: 'properties/'}));
    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>

            </header>
            <main>
                <ActivationProvider>
                    <section className={styles.propertyCardListContainer}><PropertyList properties={properties}/>
                    </section>
                    <section className={styles.propertyLeaseListContainer}>
                        <PropertyContextProvider>
                            <PropertyContextConsumer>
                                {
                                    ({property}) =>
                                        property
                                        ? <PropertyLeaseList key={property.id} property={property}/>
                                        : null
                                }
                            </PropertyContextConsumer>
                        </PropertyContextProvider>
                    </section>
                </ActivationProvider>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
