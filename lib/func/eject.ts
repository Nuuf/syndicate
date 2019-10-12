import { switchParent } from './switchParent';
import { Entity, RootList } from '../types';

/**
 * Ejects an entity from a list
 *
 */
export function eject<T>(list: RootList, entity: Entity<T>): void {
  switchParent(list, entity, JSON.parse(list[0]));
}
