import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateDataEntities } from '../../types';
import getData from './getData';

export default function getChildrenDataEntities<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  limit?: number,
  offset?: number
): SyndicateDataEntities<T> {
  const numChildren = entity.childKeys.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];
  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;
  for (; i < l; ++i) {
    children.push(getData<T>(root, entity.childKeys[i]));
  }
  return children;
}
