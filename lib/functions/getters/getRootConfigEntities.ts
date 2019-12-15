/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateConfigEntities, UnparsedSyndicateConfigEntities } from '../../types';
import { getChildrenConfigEntities, getConfig } from '.';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootConfigEntities<T>(
  root: SyndicateRootEntity,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateConfigEntities<T>;
export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  noParse?: true,
  limit?: number,
  offset?: number
): UnparsedSyndicateConfigEntities;
export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  noParse?: boolean,
  limit?: number,
  offset?: number
): any {
  if (noParse) return getChildrenConfigEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), true, limit, offset);
  return getChildrenConfigEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), false, limit, offset);
}
