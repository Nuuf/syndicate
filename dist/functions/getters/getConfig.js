"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getConfig(root, key, noParse) {
    if (noParse)
        return root.configEntities[key];
    return JSON.parse(root.configEntities[key]);
}
exports.default = getConfig;
