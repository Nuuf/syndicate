"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getters_1 = require("../getters");
var _1 = require(".");
/**
 *
 * @param root
 * @param entity
 * @param parent
 * @param arrange
 */
function add(root, entity, parent, arrange) {
    var config = entity.config, data = entity.data;
    var key = config.key, parentKey = config.parentKey;
    root.dataEntities[key] = JSON.stringify(data);
    if (parentKey && parent) {
        _1.adopt(root, config, parent, arrange);
        return;
    }
    if (!parent) {
        parent = getters_1.getConfig(root, constants_1.ROOT_ENTITY_KEY);
    }
    switch (arrange) {
        case constants_1.Arrange.START:
            parent.childKeys.unshift(key);
            break;
        default:
            parent.childKeys.push(key);
            break;
    }
    config.parentKey = parent.key;
    root.configEntities[parent.key] = JSON.stringify(parent);
    root.configEntities[key] = JSON.stringify(config);
}
exports.default = add;
