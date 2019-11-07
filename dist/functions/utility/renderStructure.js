"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getters_1 = require("../getters");
function renderStructure(root, handle) {
    function printEntity(entity, str, level) {
        str += handle(entity, level) + "\n";
        var i = 0;
        var children = getters_1.getChildrenCompositeEntities(root, entity.config);
        ++level;
        var tabs = '\t'.repeat(level);
        for (; i < children.length; ++i) {
            str += tabs;
            str = printEntity(children[i], str, level);
        }
        return str;
    }
    var str = '', i = 0;
    var rootEntities = getters_1.getRootCompositeEntities(root);
    for (; i < rootEntities.length; ++i) {
        str = printEntity(rootEntities[i], str, 0);
    }
    return str;
}
exports.default = renderStructure;
