"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getConfig_1 = require("../getters/getConfig");
function traversePath(root, entity, path) {
    if (entity.parentKey === null)
        return path;
    if (entity.key === constants_1.ROOT_ENTITY_KEY)
        return path;
    path.push(entity);
    return traversePath(root, getConfig_1.default(root, entity.parentKey), path);
}
exports.default = traversePath;
