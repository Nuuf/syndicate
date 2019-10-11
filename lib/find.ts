/**
 * Searches for an entity in a list, finding it by id
 *
 */
export function find(list: Array<string>, id: string): Entity<T> | null {
  let i = 0,
    entity;

  for (; i < list.length; ++i) {
    if (list[i] !== null) {
      entity = JSON.parse(list[i]) as Entity<T>;
      if (entity.id === id) return entity;
    }
  }

  return null;
}
