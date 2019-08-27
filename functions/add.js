var addToParent = require( './addToParent' );

module.exports = function add ( list, entity, parent ) {

  if ( 
    entity.__is_syndicate_object__ !== true || 
    ( parent != null && parent.__is_syndicate_object__ !== true )
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

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
