/**
 * Searches for an entity in a list of parsed entities, finding it by id
 *
 */
export function findParsed(list: Array<Entity<T>>, id: string): Entity<T> | null {
  let i = 0;

  for (; i < list.length; ++i) {
    if (list[i] !== null && list[i].id === id) return list[i];
  }

  return null;
}
