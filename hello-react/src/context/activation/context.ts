import {createContext} from 'react';
import {I_Property} from '../../core/types/models';


export interface I_ActivationContextState {
    activeProperty: I_Property | null
}

export type I_ActivationAction = { type: 'activate', payload: I_Property }

export interface I_ActivationContextDispatch {
    (action: I_ActivationAction): void
}


export function createInitialActivationContextState(): I_ActivationContextState {
    return {activeProperty: null};
}

export const ActivationContextState    = createContext(createInitialActivationContextState());
export const ActivationContextDispatch = createContext((() => {}) as I_ActivationContextDispatch | null);