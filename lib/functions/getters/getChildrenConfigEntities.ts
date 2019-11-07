import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import getConfig from './getConfig';

export default function getChildrenConfigEntities(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  limit?: number,
  offset?: number
): SyndicateConfigEntities {
  const numChildren = entity.childKeys.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];
  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;
  for (; i < l; ++i) {
    children.push(getConfig(root, entity.childKeys[i]));
  }
  return children;
}
