import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
export default function getChildrenConfigEntities(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: false, limit?: number, offset?: number): SyndicateConfigEntities;
export default function getChildrenConfigEntities(root: SyndicateRootEntity, entity: SyndicateConfigEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
