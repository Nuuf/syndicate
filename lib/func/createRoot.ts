import { create } from './create';
import { SyndicateRoot } from '../types';

/**
 * Creates a new syndicate root
 *
 */
export function createRoot(): SyndicateRoot {
  const rootEntity = create({ name: 'root' }, 'root');

  rootEntity.index = 0;

  const root = [JSON.stringify(rootEntity)];

  return root;
}
