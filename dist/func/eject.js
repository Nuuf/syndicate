"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var adopt_1 = require("./adopt");
/**
 * Ejects an entity
 *
 */
function eject(root, entity) {
    adopt_1.adopt(root, entity, JSON.parse(root[0]));
}
exports.eject = eject;
