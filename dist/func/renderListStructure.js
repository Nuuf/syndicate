"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getChildrenParsed_1 = require("./getChildrenParsed");
/**
 * Returns a rendered string with a visualisation of the structure
 *
 */
function renderListStructure(root, includeNull) {
    var str = '', i, entity;
    entity = root[0];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function printEntity(entity, string, level) {
        string += 'id > ' + entity.id + ' : index > ' + entity.index + ' : level > ' + level + '\n';
        var i, j;
        var children = getChildrenParsed_1.getChildrenParsed(root, entity);
        ++level;
        for (i = 0; i < children.length; ++i) {
            for (j = 0; j < level; ++j) {
                string += '\t';
            }
            string = printEntity(children[i], string, level);
        }
        return string;
    }
    for (i = 0; i < root.length; entity = root[++i]) {
        if (i === 0) {
            entity = JSON.parse(entity);
            str = printEntity(entity, str, 0);
        }
        else if (entity === null && includeNull) {
            str += 'null > index ' + i + '\n';
        }
    }
    return str;
}
exports.renderListStructure = renderListStructure;
