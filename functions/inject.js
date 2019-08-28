var fickleDelete = require( './fickleDelete' );
var checkObject = require( './checkObject' );

module.exports = function inject ( list, entityA, entityB, after ) {

  var parent, index, notInList = false;

  checkObject( entityA );
  checkObject( entityB );

  if ( entityA.id === 'root' ) throw new Error( 'SYNDICATE: NOPE' );

  if ( entityA.parentId !== null && entityB.parentId !== null ) {

    parent = JSON.parse( list[ entityA.parentIndex ] );
    fickleDelete( parent.childrenIndices, parent.childrenIndices.indexOf( entityA.index ) );
    fickleDelete( parent.childrenIds, parent.childrenIds.indexOf( entityA.id ) );

    list[ parent.index ] = JSON.stringify( parent );

    parent = JSON.parse( list[ entityB.parentIndex ] );
    index = parent.childrenIds.indexOf( entityB.id );
    parent.childrenIds.splice( after ? index + 1 : index, 0, entityA.id );
    index = parent.childrenIndices.indexOf( entityB.index );
    parent.childrenIndices.splice( after ? index + 1 : index, 0, entityA.index );

    entityA.parentIndex = parent.index;
    entityA.parentId = parent.id;

    list[ entityA.index ] = JSON.stringify( entityA );
    list[ parent.index ] = JSON.stringify( parent );

  } else if ( entityB.parentId !== null ) {

    if ( entityA.index === -1 ) {

      entityA.index = list.length;
      notInList = true;
      
    }

    parent = JSON.parse( list[ entityB.parentIndex ] );
    index = parent.childrenIds.indexOf( entityB.id );
    parent.childrenIds.splice( after ? index + 1 : index, 0, entityA.id );
    index = parent.childrenIndices.indexOf( entityB.index );
    parent.childrenIndices.splice( after ? index + 1 : index, 0, entityA.index );

    entityA.parentIndex = parent.index;
    entityA.parentId = parent.id;

    if ( notInList ) list.push( JSON.stringify( entityA ) );
    else list[ entityA.index ] = JSON.stringify( entityA );

    list[ parent.index ] = JSON.stringify( parent );

  }

};
