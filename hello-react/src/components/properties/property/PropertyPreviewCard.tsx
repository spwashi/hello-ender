import {I_Property, I_PropertyDetail} from '../../../types/models';
import {useEndpointData} from '../../../data/hooks/useEndpointData';
import {useEnvironmentVariable} from '../../../util/env';
import {getUrl} from '../../../util/urls';

const isError = (e: any) => e?.message && e?.stack;

function CardActivator() {
    return (
        <div>[todo]</div>
    )
}

function PropertyLeaseInfo({id}: { id: number | string }) {
    const token          = useEnvironmentVariable('token');
    const endpoint       = getUrl({route: 'properties/:id/leases', id});
    const propertyDetail = useEndpointData<I_PropertyDetail | null>(token, endpoint);
    return isError(propertyDetail)
           ? <div>Error</div>
           : <pre>{JSON.stringify(propertyDetail, null, 4)}</pre>;
}

export function PropertyPreviewCard({property}: { property: I_Property }) {
    const {id} = property;
    return (
        <div>
            <CardActivator/>
            <PropertyLeaseInfo id={id}/>
        </div>
    );
}