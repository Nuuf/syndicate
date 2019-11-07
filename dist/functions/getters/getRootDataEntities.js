"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var constants_1 = require("../../constants");
function getRootDataEntities(root, noParse, limit, offset) {
    if (noParse)
        return _1.getChildrenDataEntities(root, _1.getConfig(root, constants_1.ROOT_ENTITY_KEY, false), true, limit, offset);
    return _1.getChildrenDataEntities(root, _1.getConfig(root, constants_1.ROOT_ENTITY_KEY, false), false, limit, offset);
}
exports.default = getRootDataEntities;
