"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
function createConfig(customKey) {
    return {
        key: customKey ? customKey : uuid_1.v4(),
        childKeys: [],
        parentKey: null,
    };
}
exports.default = createConfig;
