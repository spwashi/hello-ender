import {prefix} from '../../util';
import {EndpointDescription, EndpointName} from './types';
import {ENV} from '../env';


/**
 * Returns the ID of an endpoint. Usually a Url.
 *
 * @param urlDescriptor
 */
export function findEndpoint(urlDescriptor: EndpointDescription): EndpointName {
    const ROUTE_ERROR_PREFIX = 'Cannot Handle Route: '
    switch (urlDescriptor.route) {
        case 'properties/':
            switch (ENV.environment) {
                case 'dev':
                    return 'http://localhost:4090/server/properties';
                case 'test':
                    return 'https://hello-ender.spwashi.com/server/properties/?hello=ender'
                case 'prod':
                    return 'https://talent.ender.com/fe-challenge/properties';
                default:
                    return ''
            }
        case 'properties/:id/leases':
            let id = urlDescriptor.id;
            if (!id) throw new Error(prefix('missing ID', ROUTE_ERROR_PREFIX))
            switch (ENV.environment) {
                case 'dev':
                    return `http://localhost:4090/server/property-leases/?property=${id}`;
                case 'test':
                    return `https://hello-ender.spwashi.com/server/property-leases/?property=${id}&hello=ender`
                case 'prod':
                    return `https://talent.ender.com/fe-challenge/properties/${id}/leases`;
                default:
                    return ''
            }

        default:
            throw new Error(prefix('unknown route', ROUTE_ERROR_PREFIX))
    }
}