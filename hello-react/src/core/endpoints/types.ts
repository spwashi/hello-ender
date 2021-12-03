type Route_Properties = 'properties/';
type Route_Properties__Leases = 'properties/:id/leases';
type AnyRoute =
    Route_Properties
    | Route_Properties__Leases;
export type EndpointDescription =
    { route: Route_Properties }
    | { route: Route_Properties__Leases, id: string | number };
type Url = string;
export type EndpointName = Url;