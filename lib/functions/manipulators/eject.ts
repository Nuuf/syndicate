import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange, ROOT_ENTITY_KEY } from '../../constants';
import { adopt } from '.';
import { getConfig } from '../getters';

/**
 *
 * @param root
 * @param entity
 * @param arrange
 */
export default function eject<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<T>,
  arrange?: Arrange.START | Arrange.END
): void {
  if (entity.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  if (entity.parentKey === ROOT_ENTITY_KEY) throw new Error('SYNDICATE: ENTITY IS ALREADY AT LEVEL 0');
  adopt(root, entity, getConfig(root, ROOT_ENTITY_KEY), arrange);
}
