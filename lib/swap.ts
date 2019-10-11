/**
 * Swaps two entities in a list
 * (Be careful not to swap ascendants with descendants)
 *
 */
export function swap(list, entityA, entityB) {
  let parentA, parentB;

  checkObject(entityA);
  checkObject(entityB);

  if (entityA.id === 'root' || entityB.id === 'root') throw new Error('SYNDICATE: NOPE');

  swapData(entityA, entityB, 'index');
  swapData(entityA, entityB, 'parentIndex');
  swapData(entityA, entityB, 'parentId');

  updateChildrenIndices(list, entityA);
  updateChildrenIndices(list, entityB);

  list[entityA.index] = JSON.stringify(entityA);
  list[entityB.index] = JSON.stringify(entityB);

  if (entityA.parentIndex !== -1) {
    parentA = JSON.parse(list[entityA.parentIndex]);
    parentA.childrenIds[parentA.childrenIds.indexOf(entityB.id)] = entityA.id;
    list[parentA.index] = JSON.stringify(parentA);
  }

  if (entityB.parentIndex !== -1) {
    parentB = JSON.parse(list[entityB.parentIndex]);
    parentB.childrenIds[parentB.childrenIds.indexOf(entityA.id)] = entityB.id;
    list[parentB.index] = JSON.stringify(parentB);
  }
}
