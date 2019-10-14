import { SyndicateEntity, SyndicatePath, SyndicateRoot } from '../types';

/**
 * Generates values for getPath
 *
 */
export function traversePath<T>(
  root: SyndicateRoot,
  path: SyndicatePath,
  entity: SyndicateEntity<T>,
  attributes: Array<string>
): SyndicatePath {
  if (entity.index === 0) {
    return path;
  }

  let i = 0;

  ((path.index as unknown) as Array<number>).push(entity.index);

  if (attributes) {
    for (; i < attributes.length; ++i) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const data = entity.data as any;
      path[attributes[i]].push(data[attributes[i]]);
    }
  }

  return traversePath(root, path, JSON.parse(root[entity.parentIndex] as string), attributes);
}
