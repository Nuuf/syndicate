"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getConfig_1 = require("../getters/getConfig");
var fickleDelete_1 = require("../../utility/fickleDelete");
function remove(root, entity, parentTakenCareOf) {
    if (entity.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    if (entity.key === constants_1.ROOT_ENTITY_KEY)
        throw new Error('SYNDICATE: ROOT CANNOT BE REMOVED');
    delete root.configEntities[entity.key];
    delete root.dataEntities[entity.key];
    var i = 0;
    for (; i < entity.childKeys.length; ++i) {
        remove(root, getConfig_1.default(root, entity.childKeys[i]), true);
    }
    if (!parentTakenCareOf) {
        var parent = getConfig_1.default(root, entity.parentKey);
        fickleDelete_1.fickleDelete(parent.childKeys, parent.childKeys.indexOf(entity.key));
        root.configEntities[parent.key] = JSON.stringify(parent);
    }
}
exports.default = remove;
