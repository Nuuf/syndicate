var getChildrenParsed = require( './getChildrenParsed' );

/**
 * Returns an array with all the children (parsed) of the root entity in a list
 * 
 */
module.exports = function getRootEntities ( list ) {

  return getChildrenParsed( list, JSON.parse( list[ 0 ] ) );

};
