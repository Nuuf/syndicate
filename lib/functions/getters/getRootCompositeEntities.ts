/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateCompositeEntities, UnparsedSyndicateCompositeEntities } from '../../types';
import { getChildrenCompositeEntities, getConfig } from '.';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootCompositeEntities<T>(
  root: SyndicateRootEntity,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateCompositeEntities<T>;
export default function getRootCompositeEntities(
  root: SyndicateRootEntity,
  noParse?: true,
  limit?: number,
  offset?: number
): UnparsedSyndicateCompositeEntities;
export default function getRootCompositeEntities<T>(
  root: SyndicateRootEntity,
  noParse?: boolean,
  limit?: number,
  offset?: number
): any {
  if (noParse) return getChildrenCompositeEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), true, limit, offset);
  return getChildrenCompositeEntities<T>(root, getConfig(root, ROOT_ENTITY_KEY, false), false, limit, offset);
}
