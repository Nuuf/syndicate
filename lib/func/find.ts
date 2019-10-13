import { SyndicateEntity, SyndicateRoot, SyndicateEntities } from '../types';

/**
 * Returns a parsed entity by id
 *
 */
export function find<T>(entities: SyndicateRoot | SyndicateEntities, id: string): SyndicateEntity<T> | null {
  let i = 0,
    entity;

  for (; i < entities.length; ++i) {
    if (entities[i] !== null) {
      entity = JSON.parse(entities[i] as string) as SyndicateEntity<T>;
      if (entity.id === id) return entity;
    }
  }

  return null;
}
