import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Connects an entity to a parent
 *
 */
export declare function addToParent<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, parent: SyndicateEntity<C>): void;
