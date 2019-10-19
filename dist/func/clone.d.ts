import { SyndicateRoot, SyndicateEntity } from '../types';
import { Arrange } from '../const';
/**
 * Clones an entity as a sibling
 *
 */
export declare function clone<T>(root: SyndicateRoot, entity: SyndicateEntity<T>, arrange?: Arrange.START | Arrange.END): SyndicateEntity<T>;
