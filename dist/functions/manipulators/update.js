"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function update(root, entity) {
    if (entity.config.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    root.dataEntities[entity.config.key] = JSON.stringify(entity.data);
}
exports.default = update;
