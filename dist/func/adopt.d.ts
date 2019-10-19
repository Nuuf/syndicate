import { SyndicateEntity, SyndicateRoot } from '../types';
import { Arrange } from '../const';
/**
 * Assigns a new parent to an entity
 *
 */
export declare function adopt<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, newParent: SyndicateEntity<C>, arrange?: Arrange.START | Arrange.END): void;
