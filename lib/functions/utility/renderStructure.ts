import { SyndicateRootEntity, SyndicateCompositeEntity } from '../../types';
import { getRootCompositeEntities, getChildrenCompositeEntities } from '../getters';

export default function renderStructure<T>(
  root: SyndicateRootEntity,
  handle: (entity: SyndicateCompositeEntity<T>, level: number) => string
): string {
  function printEntity(entity: SyndicateCompositeEntity<T>, str: string, level: number): string {
    str += `${handle(entity, level)}\n`;
    let i = 0;
    const children = getChildrenCompositeEntities<T>(root, entity.config);
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
  const rootEntities = getRootCompositeEntities<T>(root);
  for (; i < rootEntities.length; ++i) {
    str = printEntity(rootEntities[i], str, 0);
  }
  return str;
}
