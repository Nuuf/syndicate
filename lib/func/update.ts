import { checkObject } from './checkObject';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Updates an entity
 *
 */
export function update<T>(root: SyndicateRoot, entity: SyndicateEntity<T>): void {
  checkObject(entity);

  root[entity.index] = JSON.stringify(entity);
}
