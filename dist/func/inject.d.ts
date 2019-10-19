import { SyndicateRoot, SyndicateEntity } from '../types';
import { Arrange } from '../const';
/**
 * Injects an enity and assigns a parent based on a sibling
 *
 */
export declare function inject<T, C>(root: SyndicateRoot, entityA: SyndicateEntity<T>, entityB: SyndicateEntity<C>, arrange?: Arrange): void;
