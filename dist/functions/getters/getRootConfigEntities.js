"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildrenConfigEntities_1 = require("./getChildrenConfigEntities");
var getConfig_1 = require("./getConfig");
var constants_1 = require("../../constants");
function getRootConfigEntities(root, limit, offset) {
    return getChildrenConfigEntities_1.default(root, getConfig_1.default(root, constants_1.ROOT_ENTITY_KEY), limit, offset);
}
exports.default = getRootConfigEntities;
