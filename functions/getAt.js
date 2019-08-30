var checkList = require( './checkList' );

/**
 * Returns a parsed entity at the given index
 * 
 */
module.exports = function getAt ( list, index ) {

  checkList( list );

  return JSON.parse( list[ index ] );

};
