/**
 * Deletes from array
 *
 */
module.exports = function popDelete(array, index) {
  var l = array.length - 1;

  if (l < 1) return;

  var returnee = array[index];

  while (index < l) {
    array[index] = array[index + 1];
    index++;
  }

  array.pop();

  return returnee;
};
