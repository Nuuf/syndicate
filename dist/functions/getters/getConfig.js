"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getConfig(root, key) {
    return JSON.parse(root.configEntities[key]);
}
exports.default = getConfig;
