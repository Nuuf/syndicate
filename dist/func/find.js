"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a parsed entity by id
 *
 */
function find(entities, id) {
    var i = 0, entity;
    for (; i < entities.length; ++i) {
        if (entities[i] !== null) {
            entity = JSON.parse(entities[i]);
            if (entity.id === id)
                return entity;
        }
    }
    return null;
}
exports.find = find;
