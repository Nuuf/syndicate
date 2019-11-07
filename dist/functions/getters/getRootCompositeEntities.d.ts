import { SyndicateRootEntity, SyndicateCompositeEntities } from '../../types';
export default function getRootCompositeEntities<T>(root: SyndicateRootEntity, noParse?: false, limit?: number, offset?: number): SyndicateCompositeEntities<T>;
export default function getRootCompositeEntities(root: SyndicateRootEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
