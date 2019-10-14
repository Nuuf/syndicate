import { ParsedSyndicateEntities, SyndicateEntity } from '../types';
/**
 * Searches for an entity, finding it by id
 *
 */
export declare function parsedFind(entities: ParsedSyndicateEntities, id: string): SyndicateEntity<any> | null;
