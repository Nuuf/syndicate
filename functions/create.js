var uuid = require('uuid/v4');

/**
 * Creates a new syndicate object
 *
 */
module.exports = function create(data, customId) {
  return {
    __is_syndicate_object__: true,
    parentIndex: -1,
    parentId: null,
    index: -1,
    id: customId == null ? uuid() : customId,
    data: data == null ? {} : data,
    childrenIndices: [],
    childrenIds: [],
  };
};
