"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var fickleDelete_1 = require("../utility/fickleDelete");
/**
 * Deletes an entity, along with all of its descendants
 *
 */
function remove(root, entity) {
    var i = 0, parent;
    checkObject_1.checkObject(entity);
    if (entity.id === 'root')
        throw new Error('SYNDICATE: NOPE');
    root[entity.index] = null;
    if (entity.parentIndex !== -1) {
        if (root[entity.parentIndex]) {
            parent = JSON.parse(root[entity.parentIndex]);
            fickleDelete_1.fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entity.index));
            fickleDelete_1.fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entity.id));
            root[parent.index] = JSON.stringify(parent);
        }
    }
    if (entity.childrenIndices.length > 0) {
        for (; i < entity.childrenIndices.length; ++i) {
            remove(root, JSON.parse(root[entity.childrenIndices[i]]));
        }
    }
}
exports.remove = remove;
