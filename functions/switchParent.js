var fickleDelete = require( './fickleDelete' );
var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

module.exports = function switchParent ( list, entity, newParent ) {

  var oldParent;

  checkObject( entity );
  checkObject( newParent );

  checkList( list );

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
