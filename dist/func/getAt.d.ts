import { SyndicateEntity, SyndicateRoot } from '../types';
/**
 * Returns a parsed entity by index
 *
 */
export declare function getAt<T>(root: SyndicateRoot, index: number): SyndicateEntity<T>;
