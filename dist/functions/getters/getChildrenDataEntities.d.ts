import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateDataEntities } from '../../types';
export default function getChildrenDataEntities<T>(root: SyndicateRootEntity, entity: SyndicateConfigEntity, limit?: number, offset?: number): SyndicateDataEntities<T>;
