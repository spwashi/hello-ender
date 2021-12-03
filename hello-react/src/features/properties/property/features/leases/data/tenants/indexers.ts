import {I_Tenant} from '../../packages/indexing/reducer';

type DataKey = string;
type DataSelector = (tenant: I_Tenant) => string;

export type Indexer<Key extends DataKey = any, Selector extends DataSelector = any> = [Key, Selector]