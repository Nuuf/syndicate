import { switchParent } from './switchParent';
import { Entity, RootList } from '../types';

/**
 * Connects an entity to a parent
 *
 */
export function addToParent<T, C>(list: RootList, entity: Entity<T>, parent: Entity<C>): void {
  switchParent(list, entity, parent);
}
