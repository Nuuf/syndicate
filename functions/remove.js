var fickleDelete = require( './fickleDelete' );
var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

/**
 * Deletes an entity from a list, along with all of its descendants
 * 
 */
module.exports = function remove ( list, entity ) {

  var i = 0, parent;

  checkObject( entity );
  checkList( list );

  if ( entity.id === 'root' ) throw new Error( 'SYNDICATE: NOPE' );

  list[ entity.index ] = null;

  if ( entity.parentIndex !== -1 ) {
    
    if ( list[ entity.parentIndex ] ) {

      parent = JSON.parse( list[ entity.parentIndex ] );
      fickleDelete( parent.childrenIndices, parent.childrenIndices.indexOf( entity.index ) );
      fickleDelete( parent.childrenIds, parent.childrenIds.indexOf( entity.id ) );
      list[ parent.index ] = JSON.stringify( parent );
    
    }

  }

  if ( entity.childrenIndices.length > 0 ) {
    
    for ( ; i < entity.childrenIndices.length; ++i ) {

      remove( list, JSON.parse( list[ entity.childrenIndices[ i ] ] ) );

    }

  }

};
