import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Deletes an entity, along with all of its descendants
 *
 */
export declare function remove<T>(root: SyndicateRoot, entity: SyndicateEntity<T>): void;
