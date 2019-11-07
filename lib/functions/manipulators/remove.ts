import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import { ROOT_ENTITY_KEY } from '../../constants';
import getConfig from '../getters/getConfig';
import { fickleDelete } from '../../utility/fickleDelete';

export default function remove(
  root: SyndicateRootEntity,
  entity: SyndicateConfigEntity,
  parentTakenCareOf?: boolean
): void {
  if (entity.parentKey === null) throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
  if (entity.key === ROOT_ENTITY_KEY) throw new Error('SYNDICATE: ROOT CANNOT BE REMOVED');
  delete root.configEntities[entity.key];
  delete root.dataEntities[entity.key];
  let i = 0;
  for (; i < entity.childKeys.length; ++i) {
    remove(root, getConfig(root, entity.childKeys[i]), true);
  }
  if (!parentTakenCareOf) {
    const parent = getConfig(root, entity.parentKey);
    fickleDelete(parent.childKeys, parent.childKeys.indexOf(entity.key));
    root.configEntities[parent.key] = JSON.stringify(parent);
  }
}
