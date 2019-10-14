import { SyndicateEntity, SyndicateRoot, SyndicateEntities } from '../types';
/**
 * Returns an array with children of an entity
 *
 */
export declare function getChildren<T>(root: SyndicateRoot, entity: SyndicateEntity<T>, limit?: number, offset?: number): SyndicateEntities;
