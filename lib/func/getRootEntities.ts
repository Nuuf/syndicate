import { SyndicateRoot, SyndicateEntities } from '../types';
import { getChildren } from './getChildren';

/**
 * Returns an array with all the children of the root entity
 *
 */
export function getRootEntities(root: SyndicateRoot): SyndicateEntities {
  return getChildren(root, JSON.parse(root[0] as string));
}
