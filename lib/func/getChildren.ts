import { checkObject } from './checkObject';
import { Entity, RootList, EntityList } from '../types';

/**
 * Returns an array with all the children of an entity in a list
 *
 */
export function getChildren<T>(list: RootList, entity: Entity<T>, limit?: number, offset?: number): EntityList {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(list[entity.childrenIndices[i]]);
  }

  return children;
}
