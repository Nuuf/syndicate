import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import { ROOT_ENTITY_KEY } from '../../constants';
import { getConfig } from '../getters';

export default function traversePath<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<T>,
  path: SyndicateConfigEntities<T>
): SyndicateConfigEntities<T> {
  if (entity.parentKey === null) return path;
  if (entity.key === ROOT_ENTITY_KEY) return path;
  path.push(entity);
  return traversePath(root, getConfig(root, entity.parentKey), path);
}
