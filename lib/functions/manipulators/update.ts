import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';

/**
 *
 * @param root
 * @param entity
 */
export default function update<T>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T>): void {
  if (entity.config.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  root.dataEntities[entity.config.key] = JSON.stringify(entity.data);
}
