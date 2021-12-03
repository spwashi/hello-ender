import {I_Property} from '../../../../../core/types/models';
import {useContext} from 'react';
import {ActivationContextState} from '../../../../../context/activation/context';
import {PropertyContext} from '../context';


export function PropertyContextConsumer({children}: { children: (args: { property?: I_Property }) => any }) {
    const {activeProperty} = useContext(ActivationContextState);
    return (
        <PropertyContext.Consumer key={activeProperty?.id}>
            {children}
        </PropertyContext.Consumer>
    )
}
