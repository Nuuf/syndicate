import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Swaps two entities
 * (Be careful not to swap ascendants with descendants)
 *
 */
export declare function swap<T, C>(root: SyndicateRoot, entityA: SyndicateEntity<T>, entityB: SyndicateEntity<C>): void;
