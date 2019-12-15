import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { Arrange } from '../../constants';
import { getConfig } from '../getters';
import { fickleDelete } from '../../utility';

/**
 *
 * @param root
 * @param entityA
 * @param entityB
 * @param arrange
 */
export default function inject<T>(
  root: SyndicateRootEntity,
  entityA: SyndicateConfigEntity<T>,
  entityB: SyndicateConfigEntity<T>,
  arrange?: Arrange
): void {
  if (entityA.parentKey === null || entityB.parentKey === null)
    throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const { configEntities } = root;
  if (entityA.parentKey === entityB.parentKey) {
    const parent = getConfig(root, entityA.parentKey);
    fickleDelete(parent.childKeys, parent.childKeys.indexOf(entityA.key));
    switch (arrange) {
      case Arrange.START:
        parent.childKeys.unshift(entityA.key);
        break;
      case Arrange.END:
        parent.childKeys.push(entityA.key);
        break;
      case Arrange.AFTER:
        parent.childKeys.splice(parent.childKeys.indexOf(entityB.key) + 1, 0, entityA.key);
        break;
      default:
        parent.childKeys.splice(parent.childKeys.indexOf(entityB.key), 0, entityA.key);
        break;
    }
    configEntities[entityA.key] = JSON.stringify(entityA);
    configEntities[parent.key] = JSON.stringify(parent);
  } else {
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
}
