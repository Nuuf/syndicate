"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getData(root, key, noParse) {
    if (noParse)
        return root.dataEntities[key];
    return JSON.parse(root.dataEntities[key]);
}
exports.default = getData;
