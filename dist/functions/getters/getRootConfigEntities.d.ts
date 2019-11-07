import { SyndicateRootEntity, SyndicateConfigEntities } from '../../types';
export default function getRootConfigEntities(root: SyndicateRootEntity, noParse?: false, limit?: number, offset?: number): SyndicateConfigEntities;
export default function getRootConfigEntities(root: SyndicateRootEntity, noParse?: true, limit?: number, offset?: number): Array<string>;
