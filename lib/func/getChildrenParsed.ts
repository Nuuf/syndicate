import { SyndicateEntity, ParsedSyndicateEntities, SyndicateRoot } from '../types';
import { checkObject } from './checkObject';

/**
 * Returns an array with children (parsed) of an entity
 *
 */
export function getChildrenParsed<T>(
  root: SyndicateRoot,
  entity: SyndicateEntity<T>,
  limit?: number,
  offset?: number
): ParsedSyndicateEntities {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(JSON.parse(root[entity.childrenIndices[i]] as string));
  }

  return children;
}
