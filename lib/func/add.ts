import { checkObject } from './checkObject';
import { addToParent } from './addToParent';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Adds an entity and connects it to a parent if specified
 *
 */

export function add<T, C>(
  root: SyndicateRoot,
  entity: SyndicateEntity<T>,
  parent?: SyndicateEntity<C>
): SyndicateEntity<T> {
  checkObject(entity);

  if (entity.parentId !== null || entity.index !== -1) {
    if (parent) {
      addToParent(root, entity, parent);
      return entity;
    }
  }

  entity.index = root.length;

  if (parent == null) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parent = JSON.parse(root[0] as string) as SyndicateEntity<any>;
  }

  entity.parentId = parent.id;
  entity.parentIndex = parent.index;
  parent.childrenIndices.push(entity.index);
  parent.childrenIds.push(entity.id);
  root[parent.index] = JSON.stringify(parent);

  root.push(JSON.stringify(entity));

  return entity;
}
