/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  SyndicateRootEntity,
  SyndicateConfigEntity,
  SyndicateDataEntities,
  UnparsedSyndicateDataEntities,
} from '../../types';
import { getData } from '.';

export default function getChildrenDataEntities<T, C>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<C>,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateDataEntities<T>;
export default function getChildrenDataEntities<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<T>,
  noParse?: true,
  limit?: number,
  offset?: number
): UnparsedSyndicateDataEntities;
export default function getChildrenDataEntities<T, C>(
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
      children.push(getData(root, entity.childKeys[i], true));
    }
  } else {
    for (; i < l; ++i) {
      children.push(getData<T>(root, entity.childKeys[i], false));
    }
  }

  return children;
}
