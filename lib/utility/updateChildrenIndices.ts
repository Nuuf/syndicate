import { Entity, RootList } from '../types';

/**
 * Updates the indices of the children of an entity in a list
 *
 */
export function updateChildrenIndices<T>(list: RootList, entity: Entity<T>): void {
  let i = 0,
    child,
    childIndex;

  if (entity.childrenIndices.length > 0) {
    for (; i < entity.childrenIndices.length; ++i) {
      childIndex = entity.childrenIndices[i];
      child = JSON.parse(list[childIndex]);
      child.parentIndex = entity.index;
      list[childIndex] = JSON.stringify(child);
    }
  }
}
