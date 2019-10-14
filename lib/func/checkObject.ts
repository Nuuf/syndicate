import { SyndicateEntity } from '../types';

/**
 * Throws an error if the passed object is not a syndicate entity
 *
 */
export function checkObject<T>(object: SyndicateEntity<T>): void {
  if (!object || !object.__isSyndicateEntity__) {
    throw new Error('SYNDICATE: NOT A SYNDICATE ENTITY');
  }
}
