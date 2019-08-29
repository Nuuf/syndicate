var checkList = require( './checkList' );

/**
 * Searches for an entity in a list, finding it by id
 * 
 */
module.exports = function find ( list, id ) {

  checkList( list );

  var i = 0, entity;

  for ( ; i < list.length; ++i ) {

    if ( list[ i ] !== null ) {

      entity = JSON.parse( list[ i ] );
      if ( entity.id === id ) return entity;
    
    }
  
  }

  return null;

};
