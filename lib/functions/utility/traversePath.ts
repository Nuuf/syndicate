import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import { ROOT_ENTITY_KEY } from '../../constants';
import { getConfig } from '../getters';

export default function traversePath(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  path: SyndicateConfigEntities
): SyndicateConfigEntities {
  if (entity.parentKey === null) return path;
  if (entity.key === ROOT_ENTITY_KEY) return path;
  path.push(entity);
  return traversePath(root, getConfig(root, entity.parentKey), path);
}
