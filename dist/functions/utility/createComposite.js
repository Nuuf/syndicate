"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
function createComposite(dataEntity, customKey) {
    return {
        config: _1.createConfig(customKey),
        data: dataEntity,
    };
}
exports.default = createComposite;
