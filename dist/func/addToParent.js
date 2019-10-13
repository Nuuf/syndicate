"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adopt_1 = require("./adopt");
/**
 * Connects an entity to a parent
 *
 */
function addToParent(root, entity, parent) {
    adopt_1.adopt(root, entity, parent);
}
exports.addToParent = addToParent;
