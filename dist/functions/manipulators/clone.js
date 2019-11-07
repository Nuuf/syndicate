"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createComposite_1 = require("../utility/createComposite");
var getConfig_1 = require("../getters/getConfig");
var add_1 = require("./add");
function clone(root, entity, arrange) {
    var parentKey = entity.config.parentKey;
    if (parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var dupe = createComposite_1.default(JSON.parse(JSON.stringify(entity.data)));
    var parent = getConfig_1.default(root, parentKey);
    add_1.default(root, dupe, parent, arrange);
    return dupe;
}
exports.default = clone;
