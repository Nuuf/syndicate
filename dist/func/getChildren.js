"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
/**
 * Returns an array with children of an entity
 *
 */
function getChildren(root, entity, limit, offset) {
    checkObject_1.checkObject(entity);
    var numChildren = entity.childrenIndices.length;
    var i = offset ? offset : 0;
    var l = limit ? i + limit : numChildren;
    var children = [];
    if (i > numChildren || i < 0)
        i = 0;
    if (l > numChildren)
        l = numChildren;
    for (; i < l; ++i) {
        children.push(root[entity.childrenIndices[i]]);
    }
    return children;
}
exports.getChildren = getChildren;
