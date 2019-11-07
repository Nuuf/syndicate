import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import getConfig from '../getters/getConfig';

export default function swap(
  root: SyndicateRootEntity,
  entityA: SyndicateConfigEntity,
  entityB: SyndicateConfigEntity
): void {
  if (entityA.parentKey === null || entityB.parentKey === null)
    throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  const parentA = getConfig(root, entityA.parentKey);
  const parentB = getConfig(root, entityB.parentKey);
  parentA.childKeys[parentA.childKeys.indexOf(entityA.key)] = entityB.key;
  parentB.childKeys[parentB.childKeys.indexOf(entityB.key)] = entityA.key;
  entityA.parentKey = parentB.key;
  entityB.parentKey = parentA.key;
  const { configEntities } = root;
  configEntities[parentA.key] = JSON.stringify(parentA);
  configEntities[parentB.key] = JSON.stringify(parentB);
  configEntities[entityA.key] = JSON.stringify(entityA);
  configEntities[entityB.key] = JSON.stringify(entityB);
}
