import { SyndicateRootEntity, SyndicateCompositeEntity, SyndicateConfigEntity } from '../../types';
import { Arrange, ROOT_ENTITY_KEY } from '../../constants';
import { getConfig } from '../getters';
import { adopt } from '.';

/**
 *
 * @param root
 * @param entity
 * @param parent
 * @param arrange
 */
export default function add<T>(
  root: SyndicateRootEntity,
  entity: SyndicateCompositeEntity<T>,
  parent?: SyndicateConfigEntity,
  arrange?: Arrange.START | Arrange.END
): void {
  const { config, data } = entity;
  const { key, parentKey } = config;

  root.dataEntities[key] = JSON.stringify(data);

  if (parentKey && parent) {
    adopt(root, config, parent, arrange);
    return;
  }

  if (!parent) {
    parent = getConfig(root, ROOT_ENTITY_KEY);
  }

  switch (arrange) {
    case Arrange.START:
      parent.childKeys.unshift(key);
      break;
    default:
      parent.childKeys.push(key);
      break;
  }
  config.parentKey = parent.key;

  root.configEntities[parent.key] = JSON.stringify(parent);
  root.configEntities[key] = JSON.stringify(config);
}
