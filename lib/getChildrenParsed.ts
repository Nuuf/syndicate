/**
 * Returns an array with all the children (parsed) of an entity in a list
 *
 */
export function getChildrenParsed(list, entity, limit, offset) {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? offset + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(JSON.parse(list[entity.childrenIndices[i]]));
  }

  return children;
}
