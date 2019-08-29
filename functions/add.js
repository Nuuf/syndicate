var addToParent = require( './addToParent' );
var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

/**
 * Adds an entity to a list and connects it to a parent if specified
 * 
 */
module.exports = function add ( list, entity, parent ) {

  checkObject( entity );
  
  checkList( list );

  if ( 
    entity.parentId !== null ||
    entity.index !== -1 
  ) {

    addToParent( list, entity, parent );

    return;
    
  }

  entity.index = list.length;

  if ( parent == null ) {

    parent = JSON.parse( list[ 0 ] );
    
  }

  entity.parentId = parent.id;
  entity.parentIndex = parent.index;
  parent.childrenIndices.push( entity.index );
  parent.childrenIds.push( entity.id );
  list[ parent.index ] = JSON.stringify( parent );

  list.push( JSON.stringify( entity ) );

  return entity;

};
