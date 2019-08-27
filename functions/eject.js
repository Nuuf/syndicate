var switchParent = require( './switchParent' );

module.exports = function eject ( list, entity ) {

  switchParent( list, entity, JSON.parse( list[ 0 ] ) );

};
