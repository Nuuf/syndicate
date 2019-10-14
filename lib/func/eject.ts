import { adopt } from './adopt';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Ejects an entity
 *
 */
export function eject<T>(root: SyndicateRoot, entity: SyndicateEntity<T>): void {
  adopt(root, entity, JSON.parse(root[0] as string));
}
