import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Returns a parsed entity by index
 *
 */
export function getAt<T>(root: SyndicateRoot, index: number): SyndicateEntity<T> {
  return JSON.parse(root[index] as string) as SyndicateEntity<T>;
}
