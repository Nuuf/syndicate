var traversePath = require( './traversePath' );
var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

/**
 * Returns an object containing arrays of values in order entity > root
 * 
 */
module.exports = function getPath ( list, entity, attributes ) {

  checkObject( entity );
  checkList( list );

  var path = {
      index: []
    }, i = 0;

  if ( attributes ) {

    for ( ; i < attributes.length; ++i ) {

      path[ attributes[ i ] ] = [];
      
    }
    
  }

  return traversePath( list, path, entity, attributes );
  
};
