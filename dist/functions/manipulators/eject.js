"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var adopt_1 = require("./adopt");
var getConfig_1 = require("../getters/getConfig");
function eject(root, entity, arrange) {
    if (entity.parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    adopt_1.default(root, entity, getConfig_1.default(root, constants_1.ROOT_ENTITY_KEY), arrange);
}
exports.default = eject;
