/* eslint-disable @typescript-eslint/no-explicit-any */
import { SyndicateRootEntity, SyndicateDataEntities, UnparsedSyndicateDataEntities } from '../../types';
import { getChildrenDataEntities, getConfig } from '.';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootDataEntities<T>(
  root: SyndicateRootEntity,
  noParse?: false,
  limit?: number,
  offset?: number
): SyndicateDataEntities<T>;
export default function getRootDataEntities(
  root: SyndicateRootEntity,
  noParse?: true,
  limit?: number,
  offset?: number
): UnparsedSyndicateDataEntities;
export default function getRootDataEntities<T>(
  root: SyndicateRootEntity,
  noParse?: boolean,
  limit?: number,
  offset?: number
): any {
  if (noParse) return getChildrenDataEntities(root, getConfig(root, ROOT_ENTITY_KEY, false), true, limit, offset);
  return getChildrenDataEntities<T>(root, getConfig(root, ROOT_ENTITY_KEY, false), false, limit, offset);
}
