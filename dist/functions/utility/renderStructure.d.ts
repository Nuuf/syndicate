import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
export default function renderStructure<T>(root: SyndicateRootEntity, handle: <T>(entity: SyndicateCompositeEntity<T>, level: number) => string): string;
