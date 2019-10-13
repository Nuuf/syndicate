import { ParsedSyndicateEntities, SyndicateEntity } from '../types';

/**
 * Searches for an entity, finding it by id
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function parsedFind(entities: ParsedSyndicateEntities, id: string): SyndicateEntity<any> | null {
  let i = 0;

  for (; i < entities.length; ++i) {
    if (entities[i] !== null && entities[i].id === id) return entities[i];
  }

  return null;
}
