import { checkObject } from './checkObject';
import { swapData } from '../utility/swapData';
import { updateChildrenIndices } from '../utility/updateChildrenIndices';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Swaps two entities
 * (Be careful not to swap ascendants with descendants)
 *
 */
export function swap<T, C>(root: SyndicateRoot, entityA: SyndicateEntity<T>, entityB: SyndicateEntity<C>): void {
  let parentA, parentB;

  checkObject(entityA);
  checkObject(entityB);

  if (entityA.id === 'root' || entityB.id === 'root') throw new Error('SYNDICATE: NOPE');

  swapData(entityA, entityB, 'index');
  swapData(entityA, entityB, 'parentIndex');
  swapData(entityA, entityB, 'parentId');

  updateChildrenIndices(root, entityA);
  updateChildrenIndices(root, entityB);

  root[entityA.index] = JSON.stringify(entityA);
  root[entityB.index] = JSON.stringify(entityB);

  if (entityA.parentIndex !== -1) {
    parentA = JSON.parse(root[entityA.parentIndex] as string);
    parentA.childrenIds[parentA.childrenIds.indexOf(entityB.id)] = entityA.id;
    root[parentA.index] = JSON.stringify(parentA);
  }

  if (entityB.parentIndex !== -1) {
    parentB = JSON.parse(root[entityB.parentIndex] as string);
    parentB.childrenIds[parentB.childrenIds.indexOf(entityA.id)] = entityB.id;
    root[parentB.index] = JSON.stringify(parentB);
  }
}
