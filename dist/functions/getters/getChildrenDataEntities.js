"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
function getChildrenDataEntities(root, entity, noParse, limit, offset) {
    var numChildren = entity.childKeys.length;
    var i = offset ? offset : 0;
    var l = limit ? i + limit : numChildren;
    var children = [];
    if (i > numChildren || i < 0)
        i = 0;
    if (l > numChildren)
        l = numChildren;
    if (noParse) {
        for (; i < l; ++i) {
            children.push(_1.getData(root, entity.childKeys[i], true));
        }
    }
    else {
        for (; i < l; ++i) {
            children.push(_1.getData(root, entity.childKeys[i], false));
        }
    }
    return children;
}
exports.default = getChildrenDataEntities;
