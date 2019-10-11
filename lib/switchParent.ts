import { checkObject } from './checkObject';
import { fickleDelete } from './utility/fickleDelete';

/**
 * Assigns a new parent to an entity in a list
 *
 */
export function switchParent(list: Array<string>, entity: Entity<T>, newParent: Entity<T>): void {
  checkObject(entity);
  checkObject(newParent);

  if (entity.id === 'root') throw new Error('SYNDICATE: NOPE');

  const oldParent = JSON.parse(list[entity.parentIndex]);

  if (oldParent.id === newParent.id) {
    throw new Error('SYNDICATE: NEW AND OLD ARE THE SAME');
  }

  fickleDelete(oldParent.childrenIndices, oldParent.childrenIndices.indexOf(entity.index));
  fickleDelete(oldParent.childrenIds, oldParent.childrenIds.indexOf(entity.id));
  list[oldParent.index] = JSON.stringify(oldParent);

  newParent.childrenIndices.push(entity.index);
  newParent.childrenIds.push(entity.id);
  entity.parentIndex = newParent.index;
  entity.parentId = newParent.id;

  list[newParent.index] = JSON.stringify(newParent);
  list[entity.index] = JSON.stringify(entity);
}
