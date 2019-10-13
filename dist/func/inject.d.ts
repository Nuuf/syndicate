import { SyndicateRoot, SyndicateEntity } from '../types';
/**
 * Injects an enity and assigns a parent based on a sibling
 *
 */
export declare function inject<T, C>(root: SyndicateRoot, entityA: SyndicateEntity<T>, entityB: SyndicateEntity<C>, after: boolean): void;
