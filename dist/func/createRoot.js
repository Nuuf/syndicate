"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var create_1 = require("./create");
/**
 * Creates a new syndicate root
 *
 */
function createRoot() {
    var rootEntity = create_1.create({ name: 'root' }, 'root');
    rootEntity.index = 0;
    var root = [JSON.stringify(rootEntity)];
    return root;
}
exports.createRoot = createRoot;
