import { checkObject } from './checkObject';
import { SyndicateEntity, SyndicateRoot, SyndicateEntities } from '../types';

/**
 * Returns an array with children of an entity
 *
 */
export function getChildren<T>(
  root: SyndicateRoot,
  entity: SyndicateEntity<T>,
  limit?: number,
  offset?: number
): SyndicateEntities {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(root[entity.childrenIndices[i]]);
  }

  return children as SyndicateEntities;
}
