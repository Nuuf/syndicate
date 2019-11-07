"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getters_1 = require("../getters");
function traversePath(root, entity, path) {
    if (entity.parentKey === null)
        return path;
    if (entity.key === constants_1.ROOT_ENTITY_KEY)
        return path;
    path.push(entity);
    return traversePath(root, getters_1.getConfig(root, entity.parentKey), path);
}
exports.default = traversePath;
