var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

/**
 * Updates an entity in a list
 * 
 */
module.exports = function update ( list, entity ) {

  checkObject( entity );

  checkList( list );

  list[ entity.index ] = JSON.stringify( entity );

};
