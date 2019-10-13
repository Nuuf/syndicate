"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var swapData_1 = require("../utility/swapData");
var updateChildrenIndices_1 = require("../utility/updateChildrenIndices");
/**
 * Swaps two entities
 * (Be careful not to swap ascendants with descendants)
 *
 */
function swap(root, entityA, entityB) {
    var parentA, parentB;
    checkObject_1.checkObject(entityA);
    checkObject_1.checkObject(entityB);
    if (entityA.id === 'root' || entityB.id === 'root')
        throw new Error('SYNDICATE: NOPE');
    swapData_1.swapData(entityA, entityB, 'index');
    swapData_1.swapData(entityA, entityB, 'parentIndex');
    swapData_1.swapData(entityA, entityB, 'parentId');
    updateChildrenIndices_1.updateChildrenIndices(root, entityA);
    updateChildrenIndices_1.updateChildrenIndices(root, entityB);
    root[entityA.index] = JSON.stringify(entityA);
    root[entityB.index] = JSON.stringify(entityB);
    if (entityA.parentIndex !== -1) {
        parentA = JSON.parse(root[entityA.parentIndex]);
        parentA.childrenIds[parentA.childrenIds.indexOf(entityB.id)] = entityA.id;
        root[parentA.index] = JSON.stringify(parentA);
    }
    if (entityB.parentIndex !== -1) {
        parentB = JSON.parse(root[entityB.parentIndex]);
        parentB.childrenIds[parentB.childrenIds.indexOf(entityA.id)] = entityB.id;
        root[parentB.index] = JSON.stringify(parentB);
    }
}
exports.swap = swap;
