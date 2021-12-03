import {useCallback, useMemo, useState} from 'react';
import {ActivationContextDispatch, ActivationContextState, createInitialActivationContextState, I_ActivationAction} from '../context';
import {activationReducer} from '../reducer';

export default function ActivationProvider({children}: { children: any }) {
    const initialState      = useMemo(() => Object.assign({}, createInitialActivationContextState(), {exists: true}), []);
    console.log(initialState)
    const [state, setState] = useState(initialState);

    const dispatch = useCallback((action: I_ActivationAction) => setState(activationReducer(state, action)), [state]);

    return (
        <ActivationContextState.Provider value={state}>
            <ActivationContextDispatch.Provider value={dispatch}>
                {children}
            </ActivationContextDispatch.Provider>
        </ActivationContextState.Provider>
    )
}

