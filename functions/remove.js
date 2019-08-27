var fickleDelete = require( './fickleDelete' );

module.exports = function remove ( list, entity ) {

  var i = 0, parent;

  if ( 
    entity.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

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
