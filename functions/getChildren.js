var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

/**
 * Returns an array with all the children of an entity in a list
 * 
 */
module.exports = function getChildren ( list, entity ) {

  checkObject( entity );
  checkList( list );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( list[ entity.childrenIndices[ i ] ] );

  }

  return children;

};
