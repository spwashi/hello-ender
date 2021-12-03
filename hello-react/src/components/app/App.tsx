import styles from './styles/App.module.css';
import {useEndpointData} from '../../data/hooks/useEndpointData';
import {PropertyCard} from '../properties/property/PropertyCard';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import {PropertyContextProvider} from '../properties/property/context/components/Provider';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyContextConsumer} from '../properties/property/context/components/Consumer';
import {PropertyLeaseInfo} from '../properties/property/leases/LeaseInfo';


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
                                        ? <PropertyLeaseInfo key={property.id} property={property}/>
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
