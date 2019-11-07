"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var createComposite_1 = require("./createComposite");
var constants_1 = require("../../constants");
function createRoot() {
    var rootEntity = createComposite_1.default({ name: 'root' }, constants_1.ROOT_ENTITY_KEY);
    rootEntity.config.parentKey = constants_1.ROOT_ENTITY_KEY;
    var configEntities = {};
    var dataEntities = {};
    configEntities[constants_1.ROOT_ENTITY_KEY] = JSON.stringify(rootEntity.config);
    dataEntities[constants_1.ROOT_ENTITY_KEY] = JSON.stringify(rootEntity.data);
    return {
        configEntities: configEntities,
        dataEntities: dataEntities,
    };
}
exports.default = createRoot;