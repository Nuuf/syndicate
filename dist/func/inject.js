"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var fickleDelete_1 = require("../utility/fickleDelete");
/**
 * Injects an enity and assigns a parent based on a sibling
 *
 */
function inject(root, entityA, entityB, after) {
    var parent, index, notInList = false;
    checkObject_1.checkObject(entityA);
    checkObject_1.checkObject(entityB);
    if (entityA.id === 'root')
        throw new Error('SYNDICATE: NOPE');
    if (entityA.parentId !== null && entityB.parentId !== null) {
        parent = JSON.parse(root[entityA.parentIndex]);
        fickleDelete_1.fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entityA.index));
        fickleDelete_1.fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entityA.id));
        root[parent.index] = JSON.stringify(parent);
        parent = JSON.parse(root[entityB.parentIndex]);
        index = parent.childrenIds.indexOf(entityB.id);
        parent.childrenIds.splice(after ? index + 1 : index, 0, entityA.id);
        index = parent.childrenIndices.indexOf(entityB.index);
        parent.childrenIndices.splice(after ? index + 1 : index, 0, entityA.index);
        entityA.parentIndex = parent.index;
        entityA.parentId = parent.id;
        root[entityA.index] = JSON.stringify(entityA);
        root[parent.index] = JSON.stringify(parent);
    }
    else if (entityB.parentId !== null) {
        if (entityA.index === -1) {
            entityA.index = root.length;
            notInList = true;
        }
        parent = JSON.parse(root[entityB.parentIndex]);
        index = parent.childrenIds.indexOf(entityB.id);
        parent.childrenIds.splice(after ? index + 1 : index, 0, entityA.id);
        index = parent.childrenIndices.indexOf(entityB.index);
        parent.childrenIndices.splice(after ? index + 1 : index, 0, entityA.index);
        entityA.parentIndex = parent.index;
        entityA.parentId = parent.id;
        if (notInList)
            root.push(JSON.stringify(entityA));
        else
            root[entityA.index] = JSON.stringify(entityA);
        root[parent.index] = JSON.stringify(parent);
    }
}
exports.inject = inject;
