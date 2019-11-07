"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getters_1 = require("../getters");
var utility_1 = require("../../utility");
/**
 *
 * @param root
 * @param entityA
 * @param entityB
 * @param arrange
 */
function inject(root, entityA, entityB, arrange) {
    if (entityA.parentKey === null || entityB.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var configEntities = root.configEntities;
    var parentA = getters_1.getConfig(root, entityA.parentKey);
    var parentB = getters_1.getConfig(root, entityB.parentKey);
    utility_1.fickleDelete(parentA.childKeys, parentA.childKeys.indexOf(entityA.key));
    configEntities[parentA.key] = JSON.stringify(parentA);
    switch (arrange) {
        case constants_1.Arrange.START:
            parentB.childKeys.unshift(entityA.key);
            break;
        case constants_1.Arrange.END:
            parentB.childKeys.push(entityA.key);
            break;
        case constants_1.Arrange.AFTER:
            parentB.childKeys.splice(parentB.childKeys.indexOf(entityB.key) + 1, 0, entityA.key);
            break;
        default:
            parentB.childKeys.splice(parentB.childKeys.indexOf(entityB.key), 0, entityA.key);
            break;
    }
    entityA.parentKey = parentB.key;
    configEntities[entityA.key] = JSON.stringify(entityA);
    configEntities[parentB.key] = JSON.stringify(parentB);
}
exports.default = inject;
