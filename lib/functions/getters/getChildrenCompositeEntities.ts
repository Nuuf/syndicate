/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SyndicateRootEntity,
  SyndicateConfigEntity,
  SyndicateCompositeEntities,
  UnparsedSyndicateCompositeEntities,
} from '../../types';
import { getComposite } from '.';

export default function getChildrenCompositeEntities<T, C>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<C>,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateCompositeEntities<T, C>;
export default function getChildrenCompositeEntities<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<T>,
  noParse?: true,
  limit?: number,
  offset?: number
): UnparsedSyndicateCompositeEntities;
export default function getChildrenCompositeEntities<T, C>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<C>,
  noParse?: boolean,
  limit?: number,
  offset?: number
): any {
  const numChildren = entity.childKeys.length;
  let i = offset ? offset : 0;
  let l = limit ? i + limit : numChildren;
  const children = [];
  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;
  if (noParse) {
    for (; i < l; ++i) {
      children.push(getComposite(root, entity.childKeys[i], true));
    }
  } else {
    for (; i < l; ++i) {
      children.push(getComposite<T, C>(root, entity.childKeys[i], false));
    }
  }

  return children;
}
