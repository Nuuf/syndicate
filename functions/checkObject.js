/**
 * Throws an error if the passed object is not a syndicate object
 *
 */
module.exports = function(object) {
  if (!object || !object.__is_syndicate_object__) {
    throw new Error('SYNDICATE: NOT A SYNDICATE OBJECT');
  }
};
