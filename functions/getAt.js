/**
 * Returns a parsed entity at the given index
 *
 */
module.exports = function getAt(list, index) {
  return JSON.parse(list[index]);
};
