import { SyndicateEntity, SyndicateRoot, SyndicateEntities } from '../types';
/**
 * Returns a parsed entity by id
 *
 */
export declare function find<T>(entities: SyndicateRoot | SyndicateEntities, id: string): SyndicateEntity<T> | null;
