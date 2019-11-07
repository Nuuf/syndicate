import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import { traversePath } from '../utility';

export default function getPath(root: SyndicateRootEntity, entity: SyndicateConfigEntity): SyndicateConfigEntities {
  return traversePath(root, entity, []);
}
