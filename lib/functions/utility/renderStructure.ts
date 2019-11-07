import { SyndicateRootEntity, SyndicateConfigEntity } from '../../types';
import getRootConfigEntities from '../getters/getRootConfigEntities';
import getChildrenConfigEntities from '../getters/getChildrenConfigEntities';

export default function renderStructure(root: SyndicateRootEntity): string {
  function printEntity(entity: SyndicateConfigEntity, str: string, level: number): string {
    str += `key: ${entity.key}, level: ${level}\n`;
    let i = 0;
    const children = getChildrenConfigEntities(root, entity);
    ++level;
    const tabs = '\t'.repeat(level);
    for (; i < children.length; ++i) {
      str += tabs;
      str = printEntity(children[i], str, level);
    }
    return str;
  }
  let str = '',
    i = 0;
  const rootEntities = getRootConfigEntities(root);
  for (; i < rootEntities.length; ++i) {
    str = printEntity(rootEntities[i], str, 0);
  }
  return str;
}
