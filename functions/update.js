var checkObject = require( './checkObject' );

/**
 * Updates an entity in a list
 * 
 */
module.exports = function update ( list, entity ) {

  checkObject( entity );

  list[ entity.index ] = JSON.stringify( entity );

};
