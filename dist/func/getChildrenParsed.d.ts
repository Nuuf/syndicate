import { SyndicateEntity, ParsedSyndicateEntities, SyndicateRoot } from '../types';
/**
 * Returns an array with children (parsed) of an entity
 *
 */
export declare function getChildrenParsed<T>(root: SyndicateRoot, entity: SyndicateEntity<T>, limit?: number, offset?: number): ParsedSyndicateEntities;
