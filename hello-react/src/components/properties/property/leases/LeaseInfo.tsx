import {findEndpoint} from '../../../../core/endpoints';
import {useEndpointData} from '../../../../data/hooks/useEndpointData';
import {I_Property, I_Property_Lease} from '../../../../core/types/models';
import {useMemo} from 'react';
import {leaseIndexReducer} from './packages/indexing/reducer';

const isError = (e: any) => e?.message && e?.stack;

/**
 * Widget that displays information about a property's leases
 *
 * @param property
 * @constructor
 */
export function PropertyLeaseInfo({property}: { property: Pick<I_Property, 'id'> & Partial<I_Property> }) {
    const endpoint       = property ? findEndpoint({route: 'properties/:id/leases', id: property.id}) : null;
    const rawData        = useEndpointData<I_Property_Lease[]>(endpoint);
    const structuredData = useMemo(() => rawData?.reduce(leaseIndexReducer, {contacts: {}, leases: {}}), [rawData]);

    if (isError(rawData)) {
        return <div>Error</div>
    }

    let hydratedLeases = structuredData?.leases;
    if (!hydratedLeases) return null;
    return (
        <div>
            {Object.entries(hydratedLeases).map(lese => JSON.stringify(lese))}
            {Object.values(structuredData?.contacts ?? {}).map(({contact, lease}) => {
                const primaryContact = lease?.primaryContact;
                return (
                    <>
                        <div className="tenant">{contact.name}</div>
                        <pre className="tenant">{JSON.stringify(contact.name, null, 4)}</pre>
                        <pre className="tenant">{JSON.stringify(lease?.startDate, null, 4)}</pre>
                        <pre className="tenant">{JSON.stringify(lease?.inclusiveEndDate, null, 4)}</pre>
                        <pre className="tenant">{JSON.stringify(lease?.status, null, 4)}</pre>
                        <pre className="tenant">{primaryContact && JSON.stringify(structuredData?.contacts[primaryContact], null, 4)}</pre>
                    </>
                )
            })}
            <pre>{JSON.stringify(structuredData, null, 5)}</pre>
        </div>
    )
}