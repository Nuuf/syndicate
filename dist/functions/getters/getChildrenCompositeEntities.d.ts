import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateCompositeEntities } from '../../types';
export default function getChildrenCompositeEntities<T>(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: false, limit?: number, offset?: number): SyndicateCompositeEntities<T>;
export default function getChildrenCompositeEntities(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
