"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var _1 = require(".");
var getters_1 = require("../getters");
/**
 *
 * @param root
 * @param entity
 * @param arrange
 */
function eject(root, entity, arrange) {
    if (entity.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    if (entity.parentKey === constants_1.ROOT_ENTITY_KEY)
        throw new Error('SYNDICATE: ENTITY IS ALREADY AT LEVEL 0');
    _1.adopt(root, entity, getters_1.getConfig(root, constants_1.ROOT_ENTITY_KEY), arrange);
}
exports.default = eject;
