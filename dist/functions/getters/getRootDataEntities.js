"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildrenDataEntities_1 = require("./getChildrenDataEntities");
var getConfig_1 = require("./getConfig");
var constants_1 = require("../../constants");
function getRootDataEntities(root, limit, offset) {
    return getChildrenDataEntities_1.default(root, getConfig_1.default(root, constants_1.ROOT_ENTITY_KEY), limit, offset);
}
exports.default = getRootDataEntities;
