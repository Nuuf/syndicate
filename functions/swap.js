var swapData = require( './swapData' );
var updateChildrenIndices = require( './updateChildrenIndices' );

module.exports = function swap ( list, entityA, entityB ) {

  var parentA, parentB;

  if ( 
    entityA.__is_syndicate_object__ !== true || 
    entityB.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

  if ( entityA.id === 'root' || entityB.id === 'root' ) throw new Error( 'SYNDICATE: NOPE' );

  swapData( entityA, entityB, 'index' );
  swapData( entityA, entityB, 'parentIndex' );
  swapData( entityA, entityB, 'parentId' );

  updateChildrenIndices( list, entityA );
  updateChildrenIndices( list, entityB );

  list[ entityA.index ] = JSON.stringify( entityA );
  list[ entityB.index ] = JSON.stringify( entityB );

  if ( entityA.parentIndex !== -1 ) {

    parentA = JSON.parse( list[ entityA.parentIndex ] );
    parentA.childrenIds[ parentA.childrenIds.indexOf( entityB.id ) ] = entityA.id; 
    list[ parentA.index ] = JSON.stringify( parentA );
  
  }

  if ( entityB.parentIndex !== -1 ) {

    parentB = JSON.parse( list[ entityB.parentIndex ] );
    parentB.childrenIds[ parentB.childrenIds.indexOf( entityA.id ) ] = entityB.id;
    list[ parentB.index ] = JSON.stringify( parentB );
  
  }

};
