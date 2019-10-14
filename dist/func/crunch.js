"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fickleDelete_1 = require("../utility/fickleDelete");
var parsedFind_1 = require("./parsedFind");
/**
 * Removes all null values and assigns new indices to all entities
 *
 */
function crunch(root) {
    var i, j, entity, parent;
    // Remove nulls and parse everything
    for (i = 0; i < root.length; ++i) {
        if (root[i] === null)
            fickleDelete_1.fickleDelete(root, i--);
        else
            root[i] = JSON.parse(root[i]);
    }
    var parsedList = root;
    // Update all indices
    for (i = 0; i < parsedList.length; ++i) {
        parsedList[i].index = i;
    }
    // Update parents and children
    for (i = 0; i < parsedList.length; ++i) {
        if (parsedList[i].childrenIds) {
            parent = parsedList[i];
            parent.childrenIndices.length = 0;
            for (j = 0; j < parent.childrenIds.length; ++j) {
                entity = parsedFind_1.parsedFind(parsedList, parent.childrenIds[j]);
                if (entity !== null) {
                    parent.childrenIndices.push(entity.index);
                    entity.parentIndex = parent.index;
                }
            }
        }
    }
    // Restore
    for (i = 0; i < root.length; ++i) {
        root[i] = JSON.stringify(root[i]);
    }
}
exports.crunch = crunch;
