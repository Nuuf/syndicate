"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildrenCompositeEntities_1 = require("./getChildrenCompositeEntities");
var getConfig_1 = require("./getConfig");
var constants_1 = require("../../constants");
function getRootCompositeEntities(root, limit, offset) {
    return getChildrenCompositeEntities_1.default(root, getConfig_1.default(root, constants_1.ROOT_ENTITY_KEY), limit, offset);
}
exports.default = getRootCompositeEntities;
