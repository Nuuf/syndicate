var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

module.exports = function update ( list, entity ) {

  checkObject( entity );

  checkList( list );

  list[ entity.index ] = JSON.stringify( entity );

};
