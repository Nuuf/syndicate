import { adopt } from './adopt';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Connects an entity to a parent
 *
 */
export function addToParent<T, C>(root: SyndicateRoot, entity: SyndicateEntity<T>, parent: SyndicateEntity<C>): void {
  adopt(root, entity, parent);
}
