"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utility_1 = require("../utility");
var getters_1 = require("../getters");
var _1 = require(".");
var adopt_1 = require("./adopt");
/**
 *
 * @param root
 * @param entity
 * @param arrange
 * @param descendants
 */
function clone(root, entity, arrange, descendants) {
    var parentKey = entity.config.parentKey;
    if (parentKey === null)
        throw new Error('SYNDICATE: ENTITY DOES NOT EXIST WITHIN ROOT');
    var dupe = utility_1.createComposite(JSON.parse(JSON.stringify(entity.data)));
    var parent = getters_1.getConfig(root, parentKey);
    _1.add(root, dupe, parent, arrange);
    if (descendants) {
        var children = getters_1.getChildrenCompositeEntities(root, entity.config);
        var i = 0;
        for (; i < children.length; ++i) {
            var childDupe = clone(root, children[i], arrange, true);
            adopt_1.default(root, childDupe.config, dupe.config);
        }
    }
    return dupe;
}
exports.default = clone;
