import { SyndicateRoot, SyndicateEntity } from '../types';
import { checkObject } from './checkObject';
import { create } from './create';
import { getAt } from './getAt';
import { add } from './add';
import { Arrange } from '../const';

/**
 * Clones an entity as a sibling
 *
 */
export function clone<T>(
  root: SyndicateRoot,
  entity: SyndicateEntity<T>,
  arrange?: Arrange.START | Arrange.END
): SyndicateEntity<T> {
  checkObject(entity);
  const dupe = create(JSON.parse(JSON.stringify(entity.data)));
  const parent = getAt(root, entity.parentIndex);
  add(root, dupe, parent, arrange);
  return dupe;
}
