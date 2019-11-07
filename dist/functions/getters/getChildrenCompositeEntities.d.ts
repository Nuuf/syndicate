import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateCompositeEntities } from '../../types';
export default function getChildrenCompositeEntities<T>(root: SyndicateRootEntity, entity: SyndicateConfigEntity, limit?: number, offset?: number): SyndicateCompositeEntities<T>;
