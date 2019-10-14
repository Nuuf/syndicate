import { getChildrenParsed } from './getChildrenParsed';
import { SyndicateEntity, SyndicateRoot } from '../types';

/**
 * Returns a rendered string with a visualisation of the structure
 *
 */
export function renderListStructure(root: SyndicateRoot, includeNull: boolean): string {
  let str = '',
    i,
    entity;

  entity = root[0];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function printEntity(entity: SyndicateEntity<any>, string: string, level: number): string {
    string += 'id > ' + entity.id + ' : index > ' + entity.index + ' : level > ' + level + '\n';

    let i, j;
    const children = getChildrenParsed(root, entity);

    ++level;

    for (i = 0; i < children.length; ++i) {
      for (j = 0; j < level; ++j) {
        string += '\t';
      }

      string = printEntity(children[i], string, level);
    }

    return string;
  }

  for (i = 0; i < root.length; entity = root[++i]) {
    if (i === 0) {
      entity = JSON.parse(entity as string);

      str = printEntity(entity, str, 0);
    } else if (entity === null && includeNull) {
      str += 'null > index ' + i + '\n';
    }
  }

  return str;
}
