"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shiftDelete(array, index) {
    if (array.length < 1)
        return;
    var returnee = array[index];
    while (index > 0) {
        array[index] = array[index - 1];
        index--;
    }
    array.shift();
    return returnee;
}
exports.shiftDelete = shiftDelete;
