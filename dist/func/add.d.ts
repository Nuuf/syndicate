import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Adds an entity and connects it to a parent if specified
 *
 */
export declare function add<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, parent?: SyndicateEntity<C>): SyndicateEntity<T>;
