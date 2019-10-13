import { checkObject } from './checkObject';
import { fickleDelete } from '../utility/fickleDelete';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Assigns a new parent to an entity
 *
 */
export function adopt<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, newParent: SyndicateEntity<C>): void {
  checkObject(entity);
  checkObject(newParent);

  if (entity.id === 'root') throw new Error('SYNDICATE: NOPE');

  const oldParent = JSON.parse(root[entity.parentIndex] as string);

  if (oldParent.id === newParent.id) {
    throw new Error('SYNDICATE: NEW AND OLD ARE THE SAME');
  }

  fickleDelete(oldParent.childrenIndices, oldParent.childrenIndices.indexOf(entity.index));
  fickleDelete(oldParent.childrenIds, oldParent.childrenIds.indexOf(entity.id));
  root[oldParent.index] = JSON.stringify(oldParent);

  newParent.childrenIndices.push(entity.index);
  newParent.childrenIds.push(entity.id);
  entity.parentIndex = newParent.index;
  entity.parentId = newParent.id;

  root[newParent.index] = JSON.stringify(newParent);
  root[entity.index] = JSON.stringify(entity);
}
