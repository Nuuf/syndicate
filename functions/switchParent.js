var fickleDelete = require( './fickleDelete' );

module.exports = function switchParent ( list, entity, newParent ) {

  var oldParent;

  if ( 
    entity.__is_syndicate_object__ !== true || 
    newParent.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

  if ( entity.id === 'root' ) throw new Error( 'SYNDICATE: NOPE' );

  oldParent = JSON.parse( list[ entity.parentIndex ] );

  if ( oldParent.id === newParent.id ) {
      
    throw new Error( 'SYNDICATE: NEW AND OLD ARE THE SAME' );

  }

  fickleDelete( oldParent.childrenIndices, oldParent.childrenIndices.indexOf( entity.index ) );
  fickleDelete( oldParent.childrenIds, oldParent.childrenIds.indexOf( entity.id ) );
  list[ oldParent.index ] = JSON.stringify( oldParent );

  newParent.childrenIndices.push( entity.index );
  newParent.childrenIds.push( entity.id );
  entity.parentIndex = newParent.index;
  entity.parentId = newParent.id;

  list[ newParent.index ] = JSON.stringify( newParent );
  list[ entity.index ] = JSON.stringify( entity );

};
