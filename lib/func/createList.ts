import { create } from './create';
import { RootList } from '../types';

/**
 * Creates a new syndicate list
 *
 */
export function createList(): RootList {
  const root = create({ name: 'root' }, 'root');

  root.index = 0;

  const list = [JSON.stringify(root)];

  return list;
}
