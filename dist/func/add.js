"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var adopt_1 = require("./adopt");
/**
 * Adds an entity and connects it to a parent if specified
 *
 */
function add(root, entity, parent, arrange) {
    checkObject_1.checkObject(entity);
    if (entity.parentId !== null || entity.index !== -1) {
        if (parent) {
            adopt_1.adopt(root, entity, parent, arrange);
            return entity;
        }
    }
    entity.index = root.length;
    if (parent == null) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        parent = JSON.parse(root[0]);
    }
    entity.parentId = parent.id;
    entity.parentIndex = parent.index;
    parent.childrenIndices.push(entity.index);
    parent.childrenIds.push(entity.id);
    root[parent.index] = JSON.stringify(parent);
    root.push(JSON.stringify(entity));
    return entity;
}
exports.add = add;
