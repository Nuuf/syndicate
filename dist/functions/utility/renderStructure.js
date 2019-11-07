"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getRootConfigEntities_1 = require("../getters/getRootConfigEntities");
var getChildrenConfigEntities_1 = require("../getters/getChildrenConfigEntities");
function renderStructure(root) {
    function printEntity(entity, str, level) {
        str += "key: " + entity.key + ", level: " + level + "\n";
        var i = 0;
        var children = getChildrenConfigEntities_1.default(root, entity);
        ++level;
        var tabs = '\t'.repeat(level);
        for (; i < children.length; ++i) {
            str += tabs;
            str = printEntity(children[i], str, level);
        }
        return str;
    }
    var str = '', i = 0;
    var rootEntities = getRootConfigEntities_1.default(root);
    for (; i < rootEntities.length; ++i) {
        str = printEntity(rootEntities[i], str, 0);
    }
    return str;
}
exports.default = renderStructure;
