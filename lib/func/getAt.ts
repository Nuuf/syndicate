import { Entity, RootList } from '../types';

/**
 * Returns a parsed entity at the given index
 *
 */
export function getAt<T>(list: RootList, index: number): Entity<T> {
  return JSON.parse(list[index]) as Entity<T>;
}
