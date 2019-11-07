/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateConfigEntity, SyndicateConfigEntities } from '../../types';
import { getConfig } from '.';

export default function getChildrenConfigEntities(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateConfigEntities;
export default function getChildrenConfigEntities(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  noParse?: true,
  limit?: number,
  offset?: number
): Array<string>;
export default function getChildrenConfigEntities(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
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
      children.push(getConfig(root, entity.childKeys[i], true));
    }
  } else {
    for (; i < l; ++i) {
      children.push(getConfig(root, entity.childKeys[i], false));
    }
  }
  return children;
}
