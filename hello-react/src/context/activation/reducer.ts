import {I_ActivationAction, I_ActivationContextState} from './context';

/**
 * Reducer for managing the state of Property Card Activation
 *
 * @param state
 * @param action
 */
export function activationReducer(state: I_ActivationContextState, action: I_ActivationAction): I_ActivationContextState {
    switch (action.type) {
        case 'activate':
            return {
                ...state,
                activeProperty: action.payload,
            };
        case 'deactivate':
            return {
                ...state,
                activeProperty:
                    action.payload === state.activeProperty
                    ? null
                    : state.activeProperty,
            }
        default:
            return state;
    }
}