import { SyndicateRootEntity, SyndicateDataEntities } from '../../types';
import getChildrenDataEntities from './getChildrenDataEntities';
import getConfig from './getConfig';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootDataEntities<T>(
  root: SyndicateRootEntity,
  limit?: number,
  offset?: number
): SyndicateDataEntities<T> {
  return getChildrenDataEntities<T>(root, getConfig(root, ROOT_ENTITY_KEY), limit, offset);
}
