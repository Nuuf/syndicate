import { SyndicateRootEntity, SyndicateDataEntities } from '../../types';
export default function getRootDataEntities<T>(root: SyndicateRootEntity, limit?: number, offset?: number): SyndicateDataEntities<T>;
