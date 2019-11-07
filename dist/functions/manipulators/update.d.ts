import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
/**
 *
 * @param root
 * @param entity
 */
export default function update<T>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T>): void;
