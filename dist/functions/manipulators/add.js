"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = require("../../constants");
var getConfig_1 = require("../getters/getConfig");
var adopt_1 = require("./adopt");
function add(root, entity, parent, arrange) {
    var config = entity.config, data = entity.data;
    var key = config.key, parentKey = config.parentKey;
    root.dataEntities[key] = JSON.stringify(data);
    if (parentKey && parent) {
        adopt_1.default(root, config, parent, arrange);
        return;
    }
    if (!parent) {
        parent = getConfig_1.default(root, constants_1.ROOT_ENTITY_KEY);
    }
    config.parentKey = parent.key;
    root.configEntities[key] = JSON.stringify(config);
}
exports.default = add;
