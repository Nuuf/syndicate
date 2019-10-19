import { SyndicateEntity, SyndicateRoot } from '../types';
import { Arrange } from '../const';
/**
 * Adds an entity and connects it to a parent if specified
 *
 */
export declare function add<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, parent?: SyndicateEntity<C>, arrange?: Arrange.START | Arrange.END): SyndicateEntity<T>;
