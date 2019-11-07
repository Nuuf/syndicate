import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange } from '../../constants';
import getConfig from '../getters/getConfig';
import { fickleDelete } from '../../utility/fickleDelete';

export default function inject(
  root: SyndicateRootEntity,
  entityA: SyndicateConfigEntity,
  entityB: SyndicateConfigEntity,
  arrange?: Arrange
): void {
  if (entityA.parentKey === null || entityB.parentKey === null)
    throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const { configEntities } = root;
  const parentA = getConfig(root, entityA.parentKey);
  const parentB = getConfig(root, entityB.parentKey);

  fickleDelete(parentA.childKeys, parentA.childKeys.indexOf(entityA.key));

  configEntities[parentA.key] = JSON.stringify(parentA);

  switch (arrange) {
    case Arrange.START:
      parentB.childKeys.unshift(entityA.key);
      break;
    case Arrange.END:
      parentB.childKeys.push(entityA.key);
      break;
    case Arrange.AFTER:
      parentB.childKeys.splice(parentB.childKeys.indexOf(entityB.key) + 1, 0, entityA.key);
      break;
    default:
      parentB.childKeys.splice(parentB.childKeys.indexOf(entityB.key), 0, entityA.key);
      break;
  }

  entityA.parentKey = parentB.key;

  configEntities[entityA.key] = JSON.stringify(entityA);
  configEntities[parentB.key] = JSON.stringify(parentB);
}
