import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Updates the indices of the children of an entity in a list
 *
 */
export function updateChildrenIndices<T>(root: SyndicateRoot, entity: SyndicateEntity<T>): void {
  let i = 0,
    child,
    childIndex;

  if (entity.childrenIndices.length > 0) {
    for (; i < entity.childrenIndices.length; ++i) {
      childIndex = entity.childrenIndices[i];
      child = JSON.parse(root[childIndex] as string);
      child.parentIndex = entity.index;
      root[childIndex] = JSON.stringify(child);
    }
  }
}
