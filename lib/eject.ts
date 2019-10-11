import { switchParent } from './switchParent';

/**
 * Ejects an entity from a list
 *
 */
export function eject(list: Array<string>, entity: Entity<T>): void {
  switchParent(list, entity, JSON.parse(list[0]));
}
