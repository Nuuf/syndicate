const checkObject = require('./checkObject');

/**
 * Returns an array with all the children of an entity in a list
 *
 */
module.exports = function getChildren(list, entity, limit, offset) {
  checkObject(entity);

  const numChildren = entity.childrenIndices.length;
  let i = offset ? offset : 0;
  let l = limit ? offset + limit : numChildren;
  const children = [];

  if (i > numChildren || i < 0) i = 0;
  if (l > numChildren) l = numChildren;

  for (; i < l; ++i) {
    children.push(list[entity.childrenIndices[i]]);
  }

  return children;
};
