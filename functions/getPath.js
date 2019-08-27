var traversePath = require( './traversePath' );

module.exports = function getPath ( list, entity, attributes ) {

  if ( 
    entity.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

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
