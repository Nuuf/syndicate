import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateDataEntities } from '../../types';
export default function getChildrenDataEntities<T>(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: false, limit?: number, offset?: number): SyndicateDataEntities<T>;
export default function getChildrenDataEntities(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
