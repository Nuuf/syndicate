import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { Arrange } from '../../constants';
import { createComposite } from '../utility';
import { getConfig, getChildrenCompositeEntities } from '../getters';
import { add, adopt, inject } from '.';

/**
 *
 * @param root
 * @param entity
 * @param arrange
 * @param descendants
 */
export default function clone<T, C>(
  root: SyndicateRootEntity,
  entity: SyndicateCompositeEntity<T, C>,
  arrange?: Arrange,
  descendants?: boolean
): SyndicateCompositeEntity<T, C> {
  const { parentKey } = entity.config;
  if (parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const dupe = createComposite(JSON.parse(JSON.stringify(entity.data)), entity.config.configData);
  const parent = getConfig(root, parentKey);
  add(root, dupe, parent);
  inject(root, dupe.config, entity.config, arrange);
  if (descendants) {
    const children = getChildrenCompositeEntities(root, entity.config);
    let i = 0;
    for (; i < children.length; ++i) {
      const childDupe = clone(root, children[i], undefined, true);
      adopt(root, childDupe.config, dupe.config);
    }
  }
  return dupe;
}
