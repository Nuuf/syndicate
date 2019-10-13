import { fickleDelete } from '../utility/fickleDelete';
import { parsedFind } from './parsedFind';
import { ParsedSyndicateEntities, SyndicateRoot } from '../types';

/**
 * Removes all null values and assigns new indices to all entities
 *
 */
export function crunch(root: SyndicateRoot): void {
  let i, j, entity, parent;

  // Remove nulls and parse everything
  for (i = 0; i < root.length; ++i) {
    if (root[i] === null) fickleDelete(root, i--);
    else root[i] = JSON.parse(root[i] as string);
  }

  const parsedList = (root as unknown) as ParsedSyndicateEntities;

  // Update all indices
  for (i = 0; i < parsedList.length; ++i) {
    parsedList[i].index = i;
  }

  // Update parents and children
  for (i = 0; i < parsedList.length; ++i) {
    if (parsedList[i].childrenIds) {
      parent = parsedList[i];

      parent.childrenIndices.length = 0;

      for (j = 0; j < parent.childrenIds.length; ++j) {
        entity = parsedFind(parsedList, parent.childrenIds[j]);
        if (entity !== null) {
          parent.childrenIndices.push(entity.index);
          entity.parentIndex = parent.index;
        }
      }
    }
  }

  // Restore
  for (i = 0; i < root.length; ++i) {
    root[i] = JSON.stringify(root[i]);
  }
}
