import {useContext} from 'react';
import {PropertyContext} from '../context/context';

export function ConnectedPropertyName() {
    const {property} = useContext(PropertyContext)
    if (!property) return null;
    return <span className="property-name">{property.name}</span>
}