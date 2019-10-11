/**
 * Returns an array with all the children (parsed) of the root entity in a list
 *
 */
export function getRootEntities(list) {
  return getChildrenParsed(list, JSON.parse(list[0]));
}
