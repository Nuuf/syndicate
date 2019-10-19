"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkObject_1 = require("./checkObject");
var create_1 = require("./create");
var getAt_1 = require("./getAt");
var add_1 = require("./add");
/**
 * Clones an entity as a sibling
 *
 */
function clone(root, entity, arrange) {
    checkObject_1.checkObject(entity);
    var dupe = create_1.create(JSON.parse(JSON.stringify(entity.data)));
    var parent = getAt_1.getAt(root, entity.parentIndex);
    add_1.add(root, dupe, parent, arrange);
    return dupe;
}
exports.clone = clone;
