import { checkObject } from './checkObject';
import { traversePath } from '../utility/traversePath';
import { Entity, Path, RootList } from '../types';

/**
 * Returns an object containing arrays of values in order entity > root
 *
 */
export function getPath<T>(list: RootList, entity: Entity<T>, attributes: Array<string>, reverse: boolean): Path {
  checkObject(entity);

  let path: Path = {
      index: [],
    },
    i = 0;

  if (attributes) {
    for (; i < attributes.length; ++i) {
      path[attributes[i]] = [];
    }
  }

  path = traversePath(list, path, entity, attributes);

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
