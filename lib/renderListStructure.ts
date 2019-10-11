/**
 * Returns a rendered string with a visualisation of the structure of a list
 *
 */
export function generateListStructure(list, includeNull) {
  let str = '',
    i,
    entity;

  entity = list[0];

  function printEntity(entity, string, level) {
    string += 'id > ' + entity.id + ' : index > ' + entity.index + ' : level > ' + level + '\n';

    let i, j;
    const children = getChildrenParsed(list, entity);

    ++level;

    for (i = 0; i < children.length; ++i) {
      for (j = 0; j < level; ++j) {
        string += '\t';
      }

      string = printEntity(children[i], string, level);
    }

    return string;
  }

  for (i = 0; i < list.length; entity = list[++i]) {
    if (i === 0) {
      entity = JSON.parse(entity);

      str = printEntity(entity, str, 0);
    } else if (entity === null && includeNull) {
      str += 'null > index ' + i + '\n';
    }
  }

  return str;
}