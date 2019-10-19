"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var fickleDelete_1 = require("../utility/fickleDelete");
var const_1 = require("../const");
/**
 * Injects an enity and assigns a parent based on a sibling
 *
 */
function inject(root, entityA, entityB, arrange) {
    var parent, notInList = false;
    checkObject_1.checkObject(entityA);
    checkObject_1.checkObject(entityB);
    if (entityA.id === 'root')
        throw new Error('SYNDICATE: NOPE');
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function insertIdAndIndex(parent) {
        switch (arrange) {
            case const_1.Arrange.START:
                parent.childrenIds.unshift(entityA.id);
                parent.childrenIndices.unshift(entityA.index);
                return;
            case const_1.Arrange.END:
                parent.childrenIds.push(entityA.id);
                parent.childrenIndices.push(entityA.index);
                return;
            case const_1.Arrange.AFTER:
                parent.childrenIds.splice(parent.childrenIds.indexOf(entityB.id) + 1, 0, entityA.id);
                parent.childrenIndices.splice(parent.childrenIndices.indexOf(entityB.index) + 1, 0, entityA.index);
                return;
            default:
                parent.childrenIds.splice(parent.childrenIds.indexOf(entityB.id), 0, entityA.id);
                parent.childrenIndices.splice(parent.childrenIndices.indexOf(entityB.index), 0, entityA.index);
                return;
        }
    }
    if (entityA.parentId !== null && entityB.parentId !== null) {
        parent = JSON.parse(root[entityA.parentIndex]);
        fickleDelete_1.fickleDelete(parent.childrenIndices, parent.childrenIndices.indexOf(entityA.index));
        fickleDelete_1.fickleDelete(parent.childrenIds, parent.childrenIds.indexOf(entityA.id));
        root[parent.index] = JSON.stringify(parent);
        parent = JSON.parse(root[entityB.parentIndex]);
        insertIdAndIndex(parent);
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
        insertIdAndIndex(parent);
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
