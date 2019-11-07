import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { getConfig } from '../getters';

/**
 *
 * @param root
 * @param entityA
 * @param entityB
 */
export default function swap(
  root: SyndicateRootEntity,
  entityA: SyndicateConfigEntity,
  entityB: SyndicateConfigEntity
): void {
  if (entityA.parentKey === null || entityB.parentKey === null)
    throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const { configEntities } = root;
  if (entityA.parentKey === entityB.parentKey) {
    const parent = getConfig(root, entityA.parentKey);
    const indexA = parent.childKeys.indexOf(entityA.key);
    const indexB = parent.childKeys.indexOf(entityB.key);
    parent.childKeys[indexA] = entityB.key;
    parent.childKeys[indexB] = entityA.key;
    configEntities[parent.key] = JSON.stringify(parent);
    configEntities[entityA.key] = JSON.stringify(entityA);
    configEntities[entityB.key] = JSON.stringify(entityB);
  } else {
    const parentA = getConfig(root, entityA.parentKey);
    const parentB = getConfig(root, entityB.parentKey);
    const indexA = parentA.childKeys.indexOf(entityA.key);
    const indexB = parentB.childKeys.indexOf(entityB.key);
    parentA.childKeys[indexA] = entityB.key;
    parentB.childKeys[indexB] = entityA.key;
    entityA.parentKey = parentB.key;
    entityB.parentKey = parentA.key;
    configEntities[parentA.key] = JSON.stringify(parentA);
    configEntities[parentB.key] = JSON.stringify(parentB);
    configEntities[entityA.key] = JSON.stringify(entityA);
    configEntities[entityB.key] = JSON.stringify(entityB);
  }
}
