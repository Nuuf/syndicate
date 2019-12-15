import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange, ROOT_ENTITY_KEY } from '../../constants';
import { getConfig } from '../getters';
import { fickleDelete } from '../../utility';

/**
 *
 * @param root
 * @param entity
 * @param adopter
 * @param arrange
 */
export default function adopt<T>(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity<T>,
  adopter: SyndicateConfigEntity<T>,
  arrange?: Arrange.START | Arrange.END
): void {
  if (entity.parentKey === null || adopter.parentKey === null)
    throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  if (entity.key === ROOT_ENTITY_KEY) throw new Error('SYNDICATE: ROOT CANNOT BE ADOPTED');
  if (entity.parentKey === adopter.key) throw new Error('SYNDICATE: A PARENT CANNOT ADOPT ITS OWN CHILD');
  const parent = getConfig(root, entity.parentKey);
  fickleDelete(parent.childKeys, parent.childKeys.indexOf(entity.key));
  switch (arrange) {
    case Arrange.START:
      adopter.childKeys.unshift(entity.key);
      break;
    default:
      adopter.childKeys.push(entity.key);
      break;
  }
  entity.parentKey = adopter.key;
  root.configEntities[parent.key] = JSON.stringify(parent);
  root.configEntities[adopter.key] = JSON.stringify(adopter);
  root.configEntities[entity.key] = JSON.stringify(entity);
}
