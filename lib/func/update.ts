import { checkObject } from './checkObject';
import { Entity, RootList } from '../types';

/**
 * Updates an entity in a list
 *
 */
export function update<T>(list: RootList, entity: Entity<T>): void {
  checkObject(entity);

  list[entity.index] = JSON.stringify(entity);
}
