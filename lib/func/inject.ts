import { SyndicateRoot, SyndicateEntity } from '../types';
import { checkObject } from './checkObject';
import { fickleDelete } from '../utility/fickleDelete';
import { Arrange } from '../const';

/**
 * Injects an enity and assigns a parent based on a sibling
 *
 */
export function inject<T, C>(
  root: SyndicateRoot,
  entityA: SyndicateEntity<T>,
  entityB: SyndicateEntity<C>,
  arrange?: Arrange
): void {
  let parent,
    notInList = false;

  checkObject(entityA);
  checkObject(entityB);

  if (entityA.id === 'root') throw new Error('SYNDICATE: NOPE');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function insertIdAndIndex(parent: SyndicateEntity<any>): void {
    switch (arrange) {
      case Arrange.START:
        parent.childrenIds.unshift(entityA.id);
        parent.childrenIndices.unshift(entityA.index);
        return;
      case Arrange.END:
        parent.childrenIds.push(entityA.id);
        parent.childrenIndices.push(entityA.index);
        return;
      case Arrange.AFTER:
        parent.childrenIds.splice(parent.childrenIds.indexOf(entityB.id) + 1, 0, entityA.id);
        parent.childrenIndices.splice(parent.childrenIndices.indexOf(entityB.index) + 1, 0, entityA.index);
        return;
      default:
        parent.childrenIds.splice(parent.childrenIds.indexOf(entityB.id), 0, entityA.id);
        parent.childrenIndices.splice(parent.childrenIndices.indexOf(entityB.index), 0, entityA.index);
        return;
    }
  }

  if (entityA.parentId !== null && entityB.parentId !== null) {
    parent = JSON.parse(root[entityA.parentIndex] as string);
    fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entityA.index));
    fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entityA.id));

    root[parent.index] = JSON.stringify(parent);

    parent = JSON.parse(root[entityB.parentIndex] as string);

    insertIdAndIndex(parent);

    entityA.parentIndex = parent.index;
    entityA.parentId = parent.id;

    root[entityA.index] = JSON.stringify(entityA);
    root[parent.index] = JSON.stringify(parent);
  } else if (entityB.parentId !== null) {
    if (entityA.index === -1) {
      entityA.index = root.length;
      notInList = true;
    }

    parent = JSON.parse(root[entityB.parentIndex] as string);

    insertIdAndIndex(parent);

    entityA.parentIndex = parent.index;
    entityA.parentId = parent.id;

    if (notInList) root.push(JSON.stringify(entityA));
    else root[entityA.index] = JSON.stringify(entityA);

    root[parent.index] = JSON.stringify(parent);
  }
}
