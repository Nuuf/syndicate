import { checkObject } from './checkObject';
import { fickleDelete } from '../utility/fickleDelete';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Deletes an entity, along with all of its descendants
 *
 */
export function remove<T>(root: SyndicateRoot, entity: SyndicateEntity<T>): void {
  let i = 0,
    parent;

  checkObject(entity);

  if (entity.id === 'root') throw new Error('SYNDICATE: NOPE');

  root[entity.index] = null;

  if (entity.parentIndex !== -1) {
    if (root[entity.parentIndex]) {
      parent = JSON.parse(root[entity.parentIndex] as string);
      fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entity.index));
      fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entity.id));
      root[parent.index] = JSON.stringify(parent);
    }
  }

  if (entity.childrenIndices.length > 0) {
    for (; i < entity.childrenIndices.length; ++i) {
      remove(root, JSON.parse(root[entity.childrenIndices[i]] as string));
    }
  }
}
