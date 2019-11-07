"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getConfig_1 = require("../getters/getConfig");
var fickleDelete_1 = require("../../utility/fickleDelete");
function inject(root, entityA, entityB, arrange) {
    if (entityA.parentKey === null || entityB.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var configEntities = root.configEntities;
    var parentA = getConfig_1.default(root, entityA.parentKey);
    var parentB = getConfig_1.default(root, entityB.parentKey);
    fickleDelete_1.fickleDelete(parentA.childKeys, parentA.childKeys.indexOf(entityA.key));
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
