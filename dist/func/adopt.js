"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var fickleDelete_1 = require("../utility/fickleDelete");
/**
 * Assigns a new parent to an entity
 *
 */
function adopt(root, entity, newParent) {
    checkObject_1.checkObject(entity);
    checkObject_1.checkObject(newParent);
    if (entity.id === 'root')
        throw new Error('SYNDICATE: NOPE');
    var oldParent = JSON.parse(root[entity.parentIndex]);
    if (oldParent.id === newParent.id) {
        throw new Error('SYNDICATE: NEW AND OLD ARE THE SAME');
    }
    fickleDelete_1.fickleDelete(oldParent.childrenIndices, oldParent.childrenIndices.indexOf(entity.index));
    fickleDelete_1.fickleDelete(oldParent.childrenIds, oldParent.childrenIds.indexOf(entity.id));
    root[oldParent.index] = JSON.stringify(oldParent);
    newParent.childrenIndices.push(entity.index);
    newParent.childrenIds.push(entity.id);
    entity.parentIndex = newParent.index;
    entity.parentId = newParent.id;
    root[newParent.index] = JSON.stringify(newParent);
    root[entity.index] = JSON.stringify(entity);
}
exports.adopt = adopt;
