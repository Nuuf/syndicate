var fickleDelete = require( './fickleDelete' );
var parsedFind = require( './parsedFind' );
var checkList = require( './checkList' );

/**
 * Removes all null values from a list and assigns new indices to all entities
 * 
 */
module.exports = function crunchList ( list ) {

  checkList( list );

  var i, j, entity, parent;

  // Remove nulls and parse everything
  for ( i = 0 ; i < list.length; ++i ) {

    if ( list[ i ] === null ) fickleDelete( list, i-- );
    else list[ i ] = JSON.parse( list[ i ] );
  
  }

  // Update all indices
  for ( i = 0; i < list.length; ++i ) {
    
    list[ i ].index = i;

  }

  // Update parents and children
  for ( i = 0; i < list.length; ++i ) {
      
    if ( list[ i ].childrenIds ) {

      parent = list[ i ];

      parent.childrenIndices.length = 0;

      for ( j = 0; j < parent.childrenIds.length; ++j ) {

        entity = parsedFind( list, parent.childrenIds[ j ] );
        parent.childrenIndices.push( entity.index );
        entity.parentIndex = parent.index;

      }

    }

  }

  // Restore
  for ( i = 0; i < list.length; ++i ) {
    
    list[ i ] = JSON.stringify( list[ i ] );

  }

};