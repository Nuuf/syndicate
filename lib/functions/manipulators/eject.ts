import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange, ROOT_ENTITY_KEY } from '../../constants';
import adopt from './adopt';
import getConfig from '../getters/getConfig';

export default function eject(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  arrange?: Arrange.START | Arrange.END
): void {
  if (entity.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  adopt(root, entity, getConfig(root, ROOT_ENTITY_KEY), arrange);
}
