import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Assigns a new parent to an entity
 *
 */
export declare function adopt<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, newParent: SyndicateEntity<C>): void;
