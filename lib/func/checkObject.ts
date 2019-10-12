import { Entity } from '../types';

/**
 * Throws an error if the passed object is not a syndicate object
 *
 */
export function checkObject<T>(object: Entity<T>): void {
  if (!object || !object.__isSyndicateObject__) {
    throw new Error('SYNDICATE: NOT A SYNDICATE OBJECT');
  }
}
