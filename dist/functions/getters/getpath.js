"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var traversePath_1 = require("../utility/traversePath");
function getPath(root, entity) {
    return traversePath_1.default(root, entity, []);
}
exports.default = getPath;
