import { RootList, EntityList } from '../types';
import { getChildren } from './getChildren';

/**
 * Returns an array with all the children of the root entity in a list
 *
 */
export function getRootEntities(list: RootList): EntityList {
  return getChildren(list, JSON.parse(list[0]));
}
