import styles from './styles/App.module.scss';
import {useEndpointData} from '../../core/endpoints/hooks/useEndpointData';
import {I_Property} from '../../core/types/models';
import {findEndpoint} from '../../core/endpoints';
import ActivationProvider from '../../context/activation/components/Provider';
import {PropertyList} from '../../features/properties/property/components/list/PropertyList';
import {ConnectedPropertyLeaseList} from '../../features/properties/property/features/leases/components/ConnectedPropertyLeaseList';
import {useIsMobile} from '../../util/hooks/useWindowWidth';

function App() {
    const properties = useEndpointData<I_Property[] | null>(findEndpoint({route: 'properties/'}));
    const isMobile   = useIsMobile();

    return (
        <div className={styles.app}>
            <header><a href="https://spwashi.com/?from=hello-ender-app">spwashi.com</a></header>
            <main>
                <h1>Properties</h1>
                <ActivationProvider>
                    <section className={styles.propertyCardListContainer}>
                        <PropertyList properties={properties}/>
                    </section>
                    {!isMobile ? <ConnectedPropertyLeaseList/> : null}
                </ActivationProvider>
            </main>
        </div>
    );
}

export default App;
