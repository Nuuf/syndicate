import { SyndicateRootEntity, SyndicateConfigEntities } from '../../types';
import getChildrenConfigEntities from './getChildrenConfigEntities';
import getConfig from './getConfig';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function getRootConfigEntities(
  root: SyndicateRootEntity,
  limit?: number,
  offset?: number
): SyndicateConfigEntities {
  return getChildrenConfigEntities(root, getConfig(root, ROOT_ENTITY_KEY), limit, offset);
}
