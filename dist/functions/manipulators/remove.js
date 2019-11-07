"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getters_1 = require("../getters");
var utility_1 = require("../../utility");
/**
 *
 * @param root
 * @param entity
 * @param parentTakenCareOf
 */
function remove(root, entity, parentTakenCareOf) {
    if (entity.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    if (entity.key === constants_1.ROOT_ENTITY_KEY)
        throw new Error('SYNDICATE: ROOT CANNOT BE REMOVED');
    delete root.configEntities[entity.key];
    delete root.dataEntities[entity.key];
    var i = 0;
    for (; i < entity.childKeys.length; ++i) {
        remove(root, getters_1.getConfig(root, entity.childKeys[i]), true);
    }
    if (!parentTakenCareOf) {
        var parent = getters_1.getConfig(root, entity.parentKey);
        utility_1.fickleDelete(parent.childKeys, parent.childKeys.indexOf(entity.key));
        root.configEntities[parent.key] = JSON.stringify(parent);
    }
    entity.parentKey = null;
}
exports.default = remove;
