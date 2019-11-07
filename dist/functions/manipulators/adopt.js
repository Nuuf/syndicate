"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getters_1 = require("../getters");
var utility_1 = require("../../utility");
/**
 *
 * @param root
 * @param entity
 * @param adopter
 * @param arrange
 */
function adopt(root, entity, adopter, arrange) {
    if (entity.parentKey === null || adopter.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    if (entity.key === constants_1.ROOT_ENTITY_KEY)
        throw new Error('SYNDICATE: ROOT CANNOT BE ADOPTED');
    if (entity.parentKey === adopter.key)
        throw new Error('SYNDICATE: A PARENT CANNOT ADOPT ITS OWN CHILD');
    var parent = getters_1.getConfig(root, entity.parentKey);
    utility_1.fickleDelete(parent.childKeys, parent.childKeys.indexOf(entity.key));
    switch (arrange) {
        case constants_1.Arrange.START:
            adopter.childKeys.unshift(entity.key);
            break;
        default:
            adopter.childKeys.push(entity.key);
            break;
    }
    entity.parentKey = adopter.key;
    root.configEntities[parent.key] = JSON.stringify(parent);
    root.configEntities[adopter.key] = JSON.stringify(adopter);
    root.configEntities[entity.key] = JSON.stringify(entity);
}
exports.default = adopt;
