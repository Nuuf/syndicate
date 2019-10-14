"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
/**
 * Updates an entity
 *
 */
function update(root, entity) {
    checkObject_1.checkObject(entity);
    root[entity.index] = JSON.stringify(entity);
}
exports.update = update;
