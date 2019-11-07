import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
export default function getConfig(root: SyndicateRootEntity, key: string, noParse?: false): SyndicateConfigEntity;
export default function getConfig(root: SyndicateRootEntity, key: string, noParse?: true): string;
