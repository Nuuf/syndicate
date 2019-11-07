import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';

export default function getConfig(root: SyndicateRootEntity, key: string): SyndicateConfigEntity {
  return JSON.parse(root.configEntities[key]);
}
