import {prefix} from './index';
import {IS_DEV} from './constants';

type UrlDescriptor =
    { route: 'properties/' }
    | { route: 'properties/:id/leases', id: string | number };
const ROUTE_ERROR_PREFIX = 'Cannot Handle Route: '
export function getUrl(urlDescriptor: UrlDescriptor) {
    switch (urlDescriptor.route) {
        case 'properties/':
            return IS_DEV
                   ? 'http://localhost:4090/properties'
                   : 'https://talent.ender.com/fe-challenge/properties';
        case 'properties/:id/leases':
            let id = urlDescriptor.id;
            if (!id) throw new Error(prefix('missing ID', ROUTE_ERROR_PREFIX))
            return IS_DEV
                   ? `http://localhost:4090/property-leases/?property=${id}`
                   : `https://talent.ender.com/fe-challenge/properties/${id}/leases`;


        default:
            throw new Error(prefix('unknown route', ROUTE_ERROR_PREFIX))
    }
}
export const PROPERTIES_ENDPOINT_URL = getUrl({route: 'properties/'});