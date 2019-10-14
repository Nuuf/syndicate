"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Updates the indices of the children of an entity in a list
 *
 */
function updateChildrenIndices(root, entity) {
    var i = 0, child, childIndex;
    if (entity.childrenIndices.length > 0) {
        for (; i < entity.childrenIndices.length; ++i) {
            childIndex = entity.childrenIndices[i];
            child = JSON.parse(root[childIndex]);
            child.parentIndex = entity.index;
            root[childIndex] = JSON.stringify(child);
        }
    }
}
exports.updateChildrenIndices = updateChildrenIndices;
