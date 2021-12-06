import {useIsMobile} from '../../../util/hooks/useWindowWidth';
import {PropertyContextConsumer} from '../../../features/properties/property/context/components/Consumer';
import {ConnectedPropertyName} from '../../../features/properties/property/components/ConnectedPropertyName';
import {ConnectedPropertyLeaseList} from '../../../features/properties/property/features/leases/features/lease-list/control/ConnectedPropertyLeaseList';

export function PropertySection() {
    const isMobile = useIsMobile();
    return <>
        {
            !isMobile
            ? (
                <>
                    <PropertyContextConsumer>
                        {({property}) => {
                            if (!property) return null;
                            return (
                                <>
                                    <h2><ConnectedPropertyName/> Details</h2>
                                    <ConnectedPropertyLeaseList title={<h3>Leases</h3>}/>
                                </>
                            )
                        }}
                    </PropertyContextConsumer>
                </>
            )
            : null
        }
    </>;
}