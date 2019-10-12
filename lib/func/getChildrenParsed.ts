import { Entity, ParsedEntityList } from '../types';
import { checkObject } from './checkObject';

/**
 * Returns an array with all the children (parsed) of an entity in a list
 *
 */
export function getChildrenParsed<T>(
  list: Array<string>,
  entity: Entity<T>,
  limit?: number,
  offset?: number
): ParsedEntityList {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(JSON.parse(list[entity.childrenIndices[i]]));
  }

  return children;
}
