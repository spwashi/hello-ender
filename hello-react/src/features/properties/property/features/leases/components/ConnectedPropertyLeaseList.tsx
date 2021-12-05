import {PropertyContextConsumer} from '../../../context/components/Consumer';
import styles from '../../../../../../components/app/styles/App.module.scss';
import {Helmet} from 'react-helmet';
import {PropertyLeaseList} from './PropertyLeaseList';

export function ConnectedPropertyLeaseList() {
    return (
        <PropertyContextConsumer>
            {
                ({property}) => {
                    if (property) {
                        const title = property.name + ' Leases';
                        return (
                            <>
                                <Helmet><title>{title}</title></Helmet>
                                <details className={styles.propertyLeaseListContainer} open>
                                    <summary><h2><span>{property.name}</span><span> Leases</span></h2></summary>
                                    <PropertyLeaseList key={property.id} property={property}/>
                                </details>
                            </>
                        );
                    } else {return null;}
                }
            }
        </PropertyContextConsumer>
    );
}