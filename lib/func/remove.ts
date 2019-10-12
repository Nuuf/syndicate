import { checkObject } from './checkObject';
import { fickleDelete } from '../utility/fickleDelete';
import { Entity, RootList } from '../types';

/**
 * Deletes an entity from a list, along with all of its descendants
 *
 */
export function remove<T>(list: RootList, entity: Entity<T>): void {
  let i = 0,
    parent;

  checkObject(entity);

  if (entity.id === 'root') throw new Error('SYNDICATE: NOPE');

  list[entity.index] = null;

  if (entity.parentIndex !== -1) {
    if (list[entity.parentIndex]) {
      parent = JSON.parse(list[entity.parentIndex]);
      fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entity.index));
      fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entity.id));
      list[parent.index] = JSON.stringify(parent);
    }
  }

  if (entity.childrenIndices.length > 0) {
    for (; i < entity.childrenIndices.length; ++i) {
      remove(list, JSON.parse(list[entity.childrenIndices[i]]));
    }
  }
}
