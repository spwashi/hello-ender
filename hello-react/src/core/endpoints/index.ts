import {prefix} from '../../util';
import {IS_DEV} from '../constants';
import {EndpointDescription, EndpointName} from './types';


/**
 * Returns the ID of an endpoint. Usually a Url.
 *
 * @param urlDescriptor
 */
export function findEndpoint(urlDescriptor: EndpointDescription): EndpointName {
    const ROUTE_ERROR_PREFIX = 'Cannot Handle Route: '
    switch (urlDescriptor.route) {
        case 'properties/':
            return (IS_DEV
                    ? 'http://localhost:4090/properties'
                    : 'https://talent.ender.com/fe-challenge/properties') as EndpointName;
        case 'properties/:id/leases':
            let id = urlDescriptor.id;
            if (!id) throw new Error(prefix('missing ID', ROUTE_ERROR_PREFIX))
            return (IS_DEV
                    ? `http://localhost:4090/property-leases/?property=${id}`
                    : `https://talent.ender.com/fe-challenge/properties/${id}/leases`) as EndpointName;

        default:
            throw new Error(prefix('unknown route', ROUTE_ERROR_PREFIX))
    }
}