import { create } from './create';

/**
 * Creates a new syndicate list
 *
 */
export function createList(): Array<string> {
  const root = create({ name: 'root' }, 'root');

  root.index = 0;

  const list = [JSON.stringify(root)];

  return list;
}
