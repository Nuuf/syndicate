import { switchParent } from './switchParent';

/**
 * Connects an entity to a parent
 *
 */
export function addToParent(list: Array<string>, entity: Entity<T>, parent: Entity<T>): void {
  switchParent(list, entity, parent);
}
