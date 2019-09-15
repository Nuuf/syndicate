var switchParent = require('./switchParent');

/**
 * Ejects an entity from a list
 *
 */
module.exports = function eject(list, entity) {
  switchParent(list, entity, JSON.parse(list[0]));
};
