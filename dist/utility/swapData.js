"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Swaps data between two objects
 *
 */
function swapData(a, b, data) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var t = a[data];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    a[data] = b[data];
    b[data] = t;
}
exports.swapData = swapData;
