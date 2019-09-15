var switchParent = require('./switchParent');

/**
 * Connects an entity to a parent
 *
 */
module.exports = function addToParent(list, entity, parent) {
  switchParent(list, entity, parent);
};
