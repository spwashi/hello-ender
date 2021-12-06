interface Params {children: any;}

/**
 * Render a component that represents the "status" of a Tenant
 * @param children
 */
export function LeaseStatus({children}: Params) {
    let color: string;
    switch (children) {
        case 'UPCOMING':
            color = 'blue';
            break;
        case 'EXPIRED':
            color = 'red';
            break;
        case 'ACTIVE':
            color = 'green';
            break;
        default:
            color = 'grey';
            break;
    }
    return <div style={{color}}>{children.toLowerCase()}</div>
}