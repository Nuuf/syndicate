import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import { traversePath } from '../utility';

export default function getPath<C>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<C>
): SyndicateConfigEntities<C> {
  return traversePath(root, entity, []);
}
