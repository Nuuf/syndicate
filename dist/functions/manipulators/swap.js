"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig_1 = require("../getters/getConfig");
function swap(root, entityA, entityB) {
    if (entityA.parentKey === null || entityB.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var parentA = getConfig_1.default(root, entityA.parentKey);
    var parentB = getConfig_1.default(root, entityB.parentKey);
    parentA.childKeys[parentA.childKeys.indexOf(entityA.key)] = entityB.key;
    parentB.childKeys[parentB.childKeys.indexOf(entityB.key)] = entityA.key;
    entityA.parentKey = parentB.key;
    entityB.parentKey = parentA.key;
    var configEntities = root.configEntities;
    configEntities[parentA.key] = JSON.stringify(parentA);
    configEntities[parentB.key] = JSON.stringify(parentB);
    configEntities[entityA.key] = JSON.stringify(entityA);
    configEntities[entityB.key] = JSON.stringify(entityB);
}
exports.default = swap;
