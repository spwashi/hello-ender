import {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useCache} from './useCache';

function useToggleCallbacks() {
    const [fetching, setFetching] = useState({} as { [endpoint: string]: boolean });
    const isEndpointFetching      = useCallback((endpoint: string) => fetching[endpoint], [fetching]);
    const markFetchInProgress     =
              useCallback(
                  (endpoint: string) =>
                      setFetching(fetching => ({...fetching, [endpoint]: true})),
                  [setFetching],
              );
    const markFetchCompletion     =
              useCallback(
                  (endpoint: string) =>
                      setFetching(fetching => ({...fetching, [endpoint]: false})),
                  [setFetching],
              );
    ;
    return useMemo(() => ({
        isTrue:    isEndpointFetching,
        markTrue:  markFetchInProgress,
        markFalse: markFetchCompletion,
    }), [isEndpointFetching, markFetchInProgress, markFetchCompletion]);
}

export function useEndpointData<Return = any>(token: string | boolean, endpoint: string): Return {
    const [endpointData, setEndpointData] = useState(null as Return | null);
    const cache                           = useCache();
    const fetching                        = useToggleCallbacks();
    const errorRef                        = useRef(null as any | null);
    const fetchEndpoint                   =
              useCallback(async (endpoint: string) => {
                  const method  = 'POST';
                  const headers = {'Content-Type': 'application/json'};
                  const body    = JSON.stringify({token});

                  fetching.markTrue(endpoint);

                  return fetch(endpoint, {method, headers, body})
                      .then(r => r.json())
                      .catch(error => {
                          throw (errorRef.current = error)
                      });
              }, [token, fetching]);
    useEffect(
        () => {
            if (fetching.isTrue(endpoint)) return;

            let cacheIsValid: boolean;
            let payload;
            {
                const cachedEndpointState = cache.ref.current[endpoint];
                cacheIsValid              = cache.validate(cachedEndpointState);
                payload                   = cachedEndpointState?.payload;
            }

            // if there's a cache hit, return the cached payload
            if (cacheIsValid && payload) {
                setEndpointData(payload);
                return;
            }

            let doIgnoreResponse = false;
            let fetchedData;
            {
                fetching.markTrue(endpoint);
                fetchedData = fetchEndpoint(endpoint);
            }

            // if the component is unmounted before the fetch is finished
            if (doIgnoreResponse || errorRef.current) return;

            // Fetch the response
            {
                const handleSuccess = () => fetching.markFalse(endpoint);
                const handleFailure = () => fetching.markFalse(endpoint);
                fetchedData
                    .then(function cacheEndpointAnd(payload: any) {
                        cache.add(endpoint, payload);
                        return payload;
                    })
                    .then(setEndpointData)
                    .then(handleSuccess)
                    .catch(handleFailure);
            }

            return () => { doIgnoreResponse = true };
        },
        [
            endpoint, setEndpointData,
            cache.ref,
            fetching,
            cache.add, cache.validate, fetchEndpoint,
        ],
    );

    return errorRef.current ?? endpointData as Return;
}