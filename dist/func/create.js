"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
/**
 * Creates a new syndicate entity
 *
 */
function create(data, customId) {
    return {
        __isSyndicateEntity__: true,
        parentIndex: -1,
        parentId: null,
        index: -1,
        id: customId == null ? uuid_1.v4() : customId,
        data: data == null ? {} : data,
        childrenIndices: [],
        childrenIds: [],
    };
}
exports.create = create;
