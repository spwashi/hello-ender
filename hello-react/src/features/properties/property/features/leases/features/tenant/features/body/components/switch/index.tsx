import {useIsMobile} from '../../../../../../../../../../../util/hooks/useWindowWidth';
import {TenantIdentifier} from './TenantIdentifier';
import {LeaseStatus} from './LeaseStatus';
import {Date} from './Date';

/**
 * Renders a cell of information about a tenant
 * @param children
 * @param attr
 * @constructor
 */
export default function TenantInfoRenderer({children, attr}: { children: any, attr: string }) {
    const isMobile = useIsMobile();
    switch (attr) {
        case 'startDate':
        case 'endDate':
            return (
                <Date doAbbreviate={isMobile}>{
                    children
                }</Date>
            )
        case 'primaryContact':
        case 'tenant':
            return (
                <TenantIdentifier doAbbreviate={isMobile}>{
                    children
                }</TenantIdentifier>
            )
        case 'status':
            return (
                <LeaseStatus>{
                    children
                }</LeaseStatus>
            );
        default:
            return children;
    }
}