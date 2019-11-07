"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var _2 = require(".");
function fickleDelete(array, index) {
    if (index > array.length * 0.5)
        return _1.popDelete(array, index);
    return _2.shiftDelete(array, index);
}
exports.default = fickleDelete;
