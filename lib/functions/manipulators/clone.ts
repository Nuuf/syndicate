import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { Arrange } from '../../constants';
import { createComposite } from '../utility';
import { getConfig, getChildrenCompositeEntities } from '../getters';
import { add } from '.';
import adopt from './adopt';

/**
 *
 * @param root
 * @param entity
 * @param arrange
 * @param descendants
 */
export default function clone<T>(
  root: SyndicateRootEntity,
  entity: SyndicateCompositeEntity<T>,
  arrange?: Arrange.START | Arrange.END,
  descendants?: boolean
): SyndicateCompositeEntity<T> {
  const { parentKey } = entity.config;
  if (parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const dupe = createComposite(JSON.parse(JSON.stringify(entity.data)));
  const parent = getConfig(root, parentKey);
  add(root, dupe, parent, arrange);
  if (descendants) {
    const children = getChildrenCompositeEntities(root, entity.config);
    let i = 0;
    for (; i < children.length; ++i) {
      const childDupe = clone(root, children[i], arrange, true);
      adopt(root, childDupe.config, dupe.config);
    }
  }
  return dupe;
}
