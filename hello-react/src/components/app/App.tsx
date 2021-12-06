import styles from './styles/App.module.scss';
import {useEndpointData} from '../../core/endpoints/hooks/useEndpointData';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyContextProvider} from '../../features/properties/property/context/components/Provider';
import {PropertySection} from './pages/PropertySection';
import {PropertyList} from '../../features/properties/property/import';

function App() {
    const properties = useEndpointData<I_Property[] | null>(findEndpoint({route: 'properties/'}));

    return (
        <div className={styles.app}>
            <main>
                <h1>Properties</h1>
                <p>Select a property for more information.</p>
                <ActivationProvider>
                    <PropertyContextProvider>
                        <section className={styles.propertyCardListContainer}>
                            <PropertyList properties={properties}/>
                        </section>
                        <PropertySection/>
                    </PropertyContextProvider>
                </ActivationProvider>
            </main>
        </div>
    );
}

export default App;
