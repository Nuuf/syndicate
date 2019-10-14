"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Throws an error if the passed object is not a syndicate entity
 *
 */
function checkObject(object) {
    if (!object || !object.__isSyndicateEntity__) {
        throw new Error('SYNDICATE: NOT A SYNDICATE ENTITY');
    }
}
exports.checkObject = checkObject;
