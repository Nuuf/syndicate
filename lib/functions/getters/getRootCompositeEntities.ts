import { SyndicateRootEntity, SyndicateCompositeEntities } from '../../types';
import getChildrenCompositeEntities from './getChildrenCompositeEntities';
import getConfig from './getConfig';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootCompositeEntities<T>(
  root: SyndicateRootEntity,
  limit?: number,
  offset?: number
): SyndicateCompositeEntities<T> {
  return getChildrenCompositeEntities<T>(root, getConfig(root, ROOT_ENTITY_KEY), limit, offset);
}
