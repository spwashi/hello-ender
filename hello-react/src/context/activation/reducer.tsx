import {I_ActivationAction, I_ActivationContextState} from './context';

export function activationReducer(state: I_ActivationContextState, action: I_ActivationAction): I_ActivationContextState {
    switch (action.type) {
        case 'activate':
            return {
                ...state,
                activeProperty: action.payload,
            };
        default:
            return state;
    }
}