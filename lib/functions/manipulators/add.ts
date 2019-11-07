import { SyndicateRootEntity, SyndicateCompositeEntity, SyndicateConfigEntity } from '../../types';
import { Arrange, ROOT_ENTITY_KEY } from '../../constants';
import getConfig from '../getters/getConfig';
import adopt from './adopt';

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

  config.parentKey = parent.key;

  root.configEntities[key] = JSON.stringify(config);
}
