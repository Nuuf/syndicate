import { SyndicateRootEntity, SyndicateDataEntities } from '../../types';
export default function getRootDataEntities<T>(root: SyndicateRootEntity, noParse?: false, limit?: number, offset?: number): SyndicateDataEntities<T>;
export default function getRootDataEntities<T>(root: SyndicateRootEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
