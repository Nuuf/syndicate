import { checkObject } from './checkObject';
import { traversePath } from '../utility/traversePath';
import { SyndicateEntity, SyndicatePath, SyndicateRoot } from '../types';

/**
 * Returns an object containing arrays of values in order entity > root
 *
 */
export function getPath<T>(
  root: SyndicateRoot,
  entity: SyndicateEntity<T>,
  attributes?: Array<string>,
  reverse?: boolean
): SyndicatePath {
  checkObject(entity);

  let path: SyndicatePath = {
      index: [],
    },
    i = 0;

  if (attributes) {
    for (; i < attributes.length; ++i) {
      path[attributes[i]] = [];
    }
  }

  path = traversePath(root, path, entity, attributes);

  if (reverse) {
    path.index.reverse();

    if (attributes) {
      for (i = 0; i < attributes.length; ++i) {
        path[attributes[i]].reverse();
      }
    }
  }

  return path;
}
