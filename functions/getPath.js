var traversePath = require('./traversePath');
var checkObject = require('./checkObject');

/**
 * Returns an object containing arrays of values in order entity > root
 *
 */
module.exports = function getPath(list, entity, attributes, reverse) {
  checkObject(entity);

  var path = {
      index: [],
    },
    i = 0;

  if (attributes) {
    for (; i < attributes.length; ++i) {
      path[attributes[i]] = [];
    }
  }

  path = traversePath(list, path, entity, attributes);

  if (reverse) {
    path.index.reverse();

    if (attributes) {
      for (i = 0; i < attributes.length; ++i) {
        path[attributes[i]].reverse();
      }
    }
  }

  return path;
};
