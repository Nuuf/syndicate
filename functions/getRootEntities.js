var getChildren = require( './getChildren' );

module.exports = function getRootEntities ( list ) {

  return getChildren( list, JSON.parse( list[ 0 ] ) );

};
