import styles from '../../../../../../../../components/app/styles/App.module.scss';
import {Helmet} from 'react-helmet';
import {PropertyLeaseList} from '../components/PropertyLeaseList';
import {PropertyContext} from '../../../../../context/context';
import {useContext} from 'react';

/**
 * Context-Sensitive Property Lease List.
 *
 * Effects:
 *  - Updates the Page title upon render.
 *
 * @param titleComponent
 * @constructor
 */
export function ConnectedPropertyLeaseList({title: titleComponent}: { title?: any }) {
    const {property} = useContext(PropertyContext)
    if (!property) return null;
    return (
        <>
            <Helmet><title>{`${property.name} Leases`}</title></Helmet>
            <details className={styles.propertyLeaseListContainer} open>
                <summary>{titleComponent}</summary>
                <PropertyLeaseList key={property.id} property={property}/>
            </details>
        </>
    );
}