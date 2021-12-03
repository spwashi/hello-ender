import {I_Property} from '../../../../../core/types/models';
import {useContext, useMemo} from 'react';
import {ActivationContextState} from '../../../../../context/activation/context';
import {PropertyContext} from '../context';


export function PropertyContextProvider({property, children}: { property?: I_Property, children: any }) {
    const {activeProperty} = useContext(ActivationContextState);
    const propertyState    = useMemo(() => ({
        property: property ?? activeProperty ?? undefined,
        active:   activeProperty === property,
    }), [property, activeProperty]);
    return (
        <PropertyContext.Provider value={propertyState} key={activeProperty?.id}>
            {children}
        </PropertyContext.Provider>
    )
}
