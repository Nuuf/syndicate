"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var popDelete_1 = require("./popDelete");
var shiftDelete_1 = require("./shiftDelete");
function fickleDelete(array, index) {
    if (index > array.length * 0.5)
        return popDelete_1.popDelete(array, index);
    return shiftDelete_1.shiftDelete(array, index);
}
exports.fickleDelete = fickleDelete;
