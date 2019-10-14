"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var traversePath_1 = require("../utility/traversePath");
/**
 * Returns an object containing arrays of values in order entity > root
 *
 */
function getPath(root, entity, attributes, reverse) {
    checkObject_1.checkObject(entity);
    var path = {
        index: [],
    }, i = 0;
    if (attributes) {
        for (; i < attributes.length; ++i) {
            path[attributes[i]] = [];
        }
    }
    path = traversePath_1.traversePath(root, path, entity, attributes);
    if (reverse) {
        path.index.reverse();
        if (attributes) {
            for (i = 0; i < attributes.length; ++i) {
                path[attributes[i]].reverse();
            }
        }
    }
    return path;
}
exports.getPath = getPath;
