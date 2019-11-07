import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateCompositeEntities } from '../../types';
import getComposite from './getComposite';

export default function getChildrenCompositeEntities<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  limit?: number,
  offset?: number
): SyndicateCompositeEntities<T> {
  const numChildren = entity.childKeys.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];
  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;
  for (; i < l; ++i) {
    children.push(getComposite<T>(root, entity.childKeys[i]));
  }
  return children;
}
