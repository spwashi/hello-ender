import styles from './styles/App.module.css';
import {useEnvironmentVariable} from '../../util/env';
import {useEndpointData} from '../../data/hooks/useEndpointData';
import {PropertyPreviewCard} from '../properties/property/PropertyPreviewCard';
import {I_Property} from '../../types/models';
import {PROPERTIES_ENDPOINT_URL} from '../../util/urls';


function App() {
    const token      = useEnvironmentVariable('token');
    const properties = useEndpointData<I_Property[] | null>(token, PROPERTIES_ENDPOINT_URL);

    return (
        <div className={styles.app}>
            <header className={styles.appHeader}>

            </header>
            <main>
                <section className={styles.propertyCardListContainer}>
                    <ul className={styles.propertyCardList}>
                        {
                            properties?.map(property => {
                                return (
                                    <li key={property.id}>
                                        {<PropertyPreviewCard property={property}/>}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <section className={styles.propertyLeaseListContainer}></section>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
