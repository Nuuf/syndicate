/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateConfigEntities } from '../../types';
import { getChildrenConfigEntities, getConfig } from '.';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateConfigEntities;
export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  noParse?: true,
  limit?: number,
  offset?: number
): Array<string>;
export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  noParse?: boolean,
  limit?: number,
  offset?: number
): any {
  if (noParse) return getChildrenConfigEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), true, limit, offset);
  return getChildrenConfigEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), false, limit, offset);
}
