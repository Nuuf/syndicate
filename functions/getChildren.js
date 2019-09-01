var checkObject = require( './checkObject' );

/**
 * Returns an array with all the children of an entity in a list
 * 
 */
module.exports = function getChildren ( list, entity ) {

  checkObject( entity );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( list[ entity.childrenIndices[ i ] ] );

  }

  return children;

};
