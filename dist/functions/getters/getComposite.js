"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
function getComposite(root, key, noParse) {
    if (noParse) {
        return {
            config: _1.getConfig(root, key, true),
            data: _1.getData(root, key, true),
        };
    }
    return {
        config: _1.getConfig(root, key),
        data: _1.getData(root, key, false),
    };
}
exports.default = getComposite;
