"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createConfig_1 = require("./createConfig");
function createComposite(dataEntity, customKey) {
    return {
        config: createConfig_1.default(customKey),
        data: dataEntity,
    };
}
exports.default = createComposite;
