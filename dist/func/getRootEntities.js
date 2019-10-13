"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildren_1 = require("./getChildren");
/**
 * Returns an array with all the children of the root entity
 *
 */
function getRootEntities(root) {
    return getChildren_1.getChildren(root, JSON.parse(root[0]));
}
exports.getRootEntities = getRootEntities;
