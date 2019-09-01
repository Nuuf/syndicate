var checkObject = require( './checkObject' );

/**
 * Returns an array with all the children (parsed) of an entity in a list
 * 
 */
module.exports = function getChildrenParsed ( list, entity ) {

  checkObject( entity );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( JSON.parse( list[ entity.childrenIndices[ i ] ] ) );

  }

  return children;

};
