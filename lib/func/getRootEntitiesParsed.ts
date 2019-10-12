import { RootList, ParsedEntityList } from '../types';
import { getChildrenParsed } from './getChildrenParsed';

/**
 * Returns an array with all the children (parsed) of the root entity in a list
 *
 */
export function getRootEntities(list: RootList): ParsedEntityList {
  return getChildrenParsed(list, JSON.parse(list[0]));
}
