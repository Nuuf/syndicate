"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Searches for an entity, finding it by id
 *
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parsedFind(entities, id) {
    var i = 0;
    for (; i < entities.length; ++i) {
        if (entities[i] !== null && entities[i].id === id)
            return entities[i];
    }
    return null;
}
exports.parsedFind = parsedFind;
