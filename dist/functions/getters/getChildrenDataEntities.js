"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getData_1 = require("./getData");
function getChildrenDataEntities(root, entity, limit, offset) {
    var numChildren = entity.childKeys.length;
    var i = offset ? offset : 0;
    var l = limit ? i + limit : numChildren;
    var children = [];
    if (i > numChildren || i < 0)
        i = 0;
    if (l > numChildren)
        l = numChildren;
    for (; i < l; ++i) {
        children.push(getData_1.default(root, entity.childKeys[i]));
    }
    return children;
}
exports.default = getChildrenDataEntities;
