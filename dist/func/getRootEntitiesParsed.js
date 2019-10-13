"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildrenParsed_1 = require("./getChildrenParsed");
/**
 * Returns an array with all the children (parsed) of the root entity
 *
 */
function getRootEntitiesParsed(root) {
    return getChildrenParsed_1.getChildrenParsed(root, JSON.parse(root[0]));
}
exports.getRootEntitiesParsed = getRootEntitiesParsed;
