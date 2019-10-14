"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generates values for getPath
 *
 */
function traversePath(root, path, entity, attributes) {
    if (entity.index === 0) {
        return path;
    }
    var i = 0;
    path.index.push(entity.index);
    if (attributes) {
        for (; i < attributes.length; ++i) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            var data = entity.data;
            path[attributes[i]].push(data[attributes[i]]);
        }
    }
    return traversePath(root, path, JSON.parse(root[entity.parentIndex]), attributes);
}
exports.traversePath = traversePath;
