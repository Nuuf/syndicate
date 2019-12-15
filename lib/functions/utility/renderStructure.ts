import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { getRootCompositeEntities, getChildrenCompositeEntities } from '../getters';

export default function renderStructure<T, C>(
  root: SyndicateRootEntity,
  handle: (entity: SyndicateCompositeEntity<T, C>, level: number) => string
): string {
  function printEntity(entity: SyndicateCompositeEntity<T, C>, str: string, level: number): string {
    str += `${handle(entity, level)}\n`;
    let i = 0;
    const children = getChildrenCompositeEntities<T, C>(root, entity.config);
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
  const rootEntities = getRootCompositeEntities<T, C>(root);
  for (; i < rootEntities.length; ++i) {
    str = printEntity(rootEntities[i], str, 0);
  }
  return str;
}
