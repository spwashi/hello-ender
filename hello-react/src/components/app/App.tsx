import styles from './styles/App.module.css';
import {useEndpointData} from '../../core/endpoints/hooks/useEndpointData';
import {PropertyCard} from '../../features/properties/property/components/PropertyCard';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import {PropertyContextProvider} from '../../features/properties/property/context/components/Provider';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyContextConsumer} from '../../features/properties/property/context/components/Consumer';
import {PropertyLeaseList} from '../../features/properties/property/features/leases/components/PropertyLeaseList';


function App() {
    const properties = useEndpointData<I_Property[] | null>(findEndpoint({route: 'properties/'}));

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>

            </header>
            <main>
                <ActivationProvider>
                    <section className={styles.propertyCardListContainer}>
                        <ul className={styles.propertyCardList}>{
                            properties?.map(
                                property =>
                                    <li key={property.id}>
                                        <PropertyCard property={property}/>
                                    </li>,
                            )
                        }</ul>
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
