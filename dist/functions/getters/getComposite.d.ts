import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
export default function getComposite<T>(root: SyndicateRootEntity, key: string): SyndicateCompositeEntity<T>;
