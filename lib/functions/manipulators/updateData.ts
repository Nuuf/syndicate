import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';

/**
 *
 * @param root
 * @param entity
 */
export default function updateData<T, C>(root: SyndicateRootEntity, entity: SyndicateCompositeEntity<T, C>): void {
  if (entity.config.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  root.dataEntities[entity.config.key] = JSON.stringify(entity.data);
}
