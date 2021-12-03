import {I_Property} from '../../../core/types/models';
import {useCallback, useContext} from 'react';
import {ActivationContextDispatch} from '../../../context/activation/context';
import {PropertyContext} from './context/context';
import {PropertyContextProvider} from './context/components/Provider';


function CardActivator() {
    const {property} = useContext(PropertyContext)
    const dispatch   = useContext(ActivationContextDispatch);
    const activate   = useCallback(() => {
        if (!(property && dispatch)) return;
        dispatch({type: 'activate', payload: property})
    }, [dispatch]);

    return (
        <div>
            <button onClick={activate}>[activate]</button>
        </div>
    )
}

export function PropertyCard({property}: { property: I_Property }) {
    return (
        <PropertyContextProvider property={property}>
            <CardActivator/>
        </PropertyContextProvider>
    );
}