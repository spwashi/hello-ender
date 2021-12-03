import {I_Property} from '../../../../core/types/models';
import {createContext} from 'react';

export type I_PropertyContextState = { property?: I_Property, active?: boolean };
export const PropertyContext = createContext({} as I_PropertyContextState);
