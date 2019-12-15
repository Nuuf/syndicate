import { SyndicateRootEntity, SyndicateRootList } from '../../types';
import { createComposite } from '.';
import { ROOT_ENTITY_KEY } from '../../constants';

export default function createRoot(): SyndicateRootEntity {
  const rootEntity = createComposite({ name: 'root' }, undefined, ROOT_ENTITY_KEY);
  rootEntity.config.parentKey = ROOT_ENTITY_KEY;
  const configEntities: SyndicateRootList = {};
  const dataEntities: SyndicateRootList = {};
  configEntities[ROOT_ENTITY_KEY] = JSON.stringify(rootEntity.config);
  dataEntities[ROOT_ENTITY_KEY] = JSON.stringify(rootEntity.data);
  return {
    configEntities,
    dataEntities,
  };
}
