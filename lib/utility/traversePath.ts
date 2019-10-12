import { Entity, Path, RootList } from '../types';

/**
 * Generates values for getPath
 *
 */
export function traversePath<T>(list: RootList, path: Path, entity: Entity<T>, attributes: Array<string>): Path {
  let i = 0;

  ((path.index as unknown) as Array<number>).push(entity.index);

  if (attributes) {
    for (; i < attributes.length; ++i) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = entity.data as any;
      path[attributes[i]].push(data[attributes[i]]);
    }
  }

  if (entity.parentIndex !== -1) {
    return traversePath(list, path, JSON.parse(list[entity.parentIndex]), attributes);
  }

  return path;
}
