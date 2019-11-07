"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(root, key) {
    return JSON.parse(root.dataEntities[key]);
}
exports.default = getData;
