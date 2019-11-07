import { SyndicateRootEntity, SyndicateCompositeEntity, UnparsedCompositeEntity } from '../../types';
export default function getComposite<T>(root: SyndicateRootEntity, key: string, noParse?: false): SyndicateCompositeEntity<T>;
export default function getComposite(root: SyndicateRootEntity, key: string, noParse?: true): UnparsedCompositeEntity;
