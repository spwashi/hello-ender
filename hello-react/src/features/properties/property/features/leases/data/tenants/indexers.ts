import {I_Tenant} from '../../packages/indexing/reducer';

type DataKey = { title: string; attr: string; className: string; };
type DataSelector = (tenant: I_Tenant) => string;

export type Indexer<Key extends DataKey = DataKey, Selector extends DataSelector = any> = [Key, Selector]