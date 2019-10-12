import { checkObject } from './checkObject';
import { addToParent } from './addToParent';
import { Entity, RootList } from '../types';

/**
 * Adds an entity to a list and connects it to a parent if specified
 *
 */

export function add<T, C>(list: RootList, entity: Entity<T>, parent: Entity<C>): Entity<T> {
  checkObject(entity);

  if (entity.parentId !== null || entity.index !== -1) {
    addToParent(list, entity, parent);
    return entity;
  }

  entity.index = list.length;

  if (parent == null) {
    parent = JSON.parse(list[0]);
  }

  entity.parentId = parent.id;
  entity.parentIndex = parent.index;
  parent.childrenIndices.push(entity.index);
  parent.childrenIds.push(entity.id);
  list[parent.index] = JSON.stringify(parent);

  list.push(JSON.stringify(entity));

  return entity;
}
