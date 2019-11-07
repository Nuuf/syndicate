import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { Arrange } from '../../constants';
import createComposite from '../utility/createComposite';
import getConfig from '../getters/getConfig';
import add from './add';

export default function clone<T>(
  root: SyndicateRootEntity,
  entity: SyndicateCompositeEntity<T>,
  arrange?: Arrange.START | Arrange.END
): SyndicateCompositeEntity<T> {
  const { parentKey } = entity.config;
  if (parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const dupe = createComposite(JSON.parse(JSON.stringify(entity.data)));
  const parent = getConfig(root, parentKey);
  add(root, dupe, parent, arrange);
  return dupe;
}
