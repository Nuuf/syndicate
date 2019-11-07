"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getConfig_1 = require("./getConfig");
var getData_1 = require("./getData");
function getComposite(root, key) {
    return {
        config: getConfig_1.default(root, key),
        data: getData_1.default(root, key),
    };
}
exports.default = getComposite;
