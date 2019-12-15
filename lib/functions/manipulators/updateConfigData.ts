import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';

/**
 *
 * @param root
 * @param entity
 */
export default function updateConfigData<T>(root: SyndicateRootEntity, entity: SyndicateConfigEntity<T>): void {
  if (entity.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const check = JSON.parse(root.configEntities[entity.key]) as SyndicateConfigEntity<T>;
  check.configData = entity.configData;
  root.configEntities[entity.key] = JSON.stringify(check);
}
