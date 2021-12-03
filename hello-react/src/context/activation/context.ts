import {createContext} from 'react';
import {I_Property} from '../../core/types/models';


export interface I_ActivationContextState {
    activeProperty: I_Property | null;
    exists: boolean
}

export type I_ActivationAction = { type: 'activate', payload: I_Property }

export interface I_ActivationContextDispatch {
    (action: I_ActivationAction): void
}


export function createInitialActivationContextState(): I_ActivationContextState {
    return {activeProperty: null, exists: false};
}

const initialState                     = createInitialActivationContextState();
export const ActivationContextState    = createContext(initialState);
export const ActivationContextDispatch = createContext((() => {}) as I_ActivationContextDispatch | null);