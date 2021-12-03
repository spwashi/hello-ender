import {useCallback, useContext} from 'react';
import {PropertyContext} from '../context/context';
import {ActivationContextDispatch} from '../../../../context/activation/context';

/**
 *
 * @constructor
 */
export function PropertyCardActivator() {
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