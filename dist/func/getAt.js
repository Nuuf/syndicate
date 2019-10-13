"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a parsed entity by index
 *
 */
function getAt(root, index) {
    return JSON.parse(root[index]);
}
exports.getAt = getAt;
