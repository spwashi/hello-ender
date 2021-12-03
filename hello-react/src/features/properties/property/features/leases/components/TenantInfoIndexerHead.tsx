import {Indexer} from '../data/tenants/indexers';

/**
 *
 * @param head
 * @constructor
 */
export function TenantInfoIndexerHead({head}: { head: Indexer[0] }) {
    return <div key={head} className={head}>{head}</div>;
}