import { ParsedEntityList, Entity } from '../types';

/**
 * Searches for an entity in a list of parsed entities, finding it by id
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function findParsed(list: ParsedEntityList, id: string): Entity<any> | null {
  let i = 0;

  for (; i < list.length; ++i) {
    if (list[i] !== null && list[i].id === id) return list[i];
  }

  return null;
}
