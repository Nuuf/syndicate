var getChildrenParsed = require( './getChildrenParsed' );

module.exports = function getRootEntities ( list ) {

  return getChildrenParsed( list, JSON.parse( list[ 0 ] ) );

};
