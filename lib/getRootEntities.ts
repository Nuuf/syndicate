/**
 * Returns an array with all the children of the root entity in a list
 *
 */
export function getRootEntities(list) {
  return getChildren(list, JSON.parse(list[0]));
}
