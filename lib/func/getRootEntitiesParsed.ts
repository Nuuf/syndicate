import { SyndicateRoot, ParsedSyndicateEntities } from '../types';
import { getChildrenParsed } from './getChildrenParsed';

/**
 * Returns an array with all the children (parsed) of the root entity
 *
 */
export function getRootEntitiesParsed(root: SyndicateRoot): ParsedSyndicateEntities {
  return getChildrenParsed(root, JSON.parse(root[0] as string));
}
