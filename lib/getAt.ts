/**
 * Returns a parsed entity at the given index
 *
 */
export function getAt(list: Array<string>, index: number): Entity<T> {
  return JSON.parse(list[index]) as Entity<T>;
}
