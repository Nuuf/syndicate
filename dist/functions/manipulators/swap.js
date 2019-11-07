"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("../getters");
/**
 *
 * @param root
 * @param entityA
 * @param entityB
 */
function swap(root, entityA, entityB) {
    if (entityA.parentKey === null || entityB.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var configEntities = root.configEntities;
    if (entityA.parentKey === entityB.parentKey) {
        var parent = getters_1.getConfig(root, entityA.parentKey);
        var indexA = parent.childKeys.indexOf(entityA.key);
        var indexB = parent.childKeys.indexOf(entityB.key);
        parent.childKeys[indexA] = entityB.key;
        parent.childKeys[indexB] = entityA.key;
        configEntities[parent.key] = JSON.stringify(parent);
        configEntities[entityA.key] = JSON.stringify(entityA);
        configEntities[entityB.key] = JSON.stringify(entityB);
    }
    else {
        var parentA = getters_1.getConfig(root, entityA.parentKey);
        var parentB = getters_1.getConfig(root, entityB.parentKey);
        var indexA = parentA.childKeys.indexOf(entityA.key);
        var indexB = parentB.childKeys.indexOf(entityB.key);
        parentA.childKeys[indexA] = entityB.key;
        parentB.childKeys[indexB] = entityA.key;
        entityA.parentKey = parentB.key;
        entityB.parentKey = parentA.key;
        configEntities[parentA.key] = JSON.stringify(parentA);
        configEntities[parentB.key] = JSON.stringify(parentB);
        configEntities[entityA.key] = JSON.stringify(entityA);
        configEntities[entityB.key] = JSON.stringify(entityB);
    }
}
exports.default = swap;
