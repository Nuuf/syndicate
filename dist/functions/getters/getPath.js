"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("../utility");
function getPath(root, entity) {
    return utility_1.traversePath(root, entity, []);
}
exports.default = getPath;
