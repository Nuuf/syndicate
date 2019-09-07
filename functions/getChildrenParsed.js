var checkObject = require( './checkObject' );

/**
 * Returns an array with all the children (parsed) of an entity in a list
 * 
 */
module.exports = function getChildrenParsed ( list, entity, limit, offset ) {

  checkObject( entity );

  var numChildren = entity.childrenIndices.length;
  var i = offset ? offset : 0;
  var l = limit ? offset + limit : numChildren;
  var children = [];

  if ( i > numChildren || i < 0 ) i = 0;
  if ( l > numChildren ) l = numChildren;

  for ( ; i < l; ++i ) {

    children.push( JSON.parse( list[ entity.childrenIndices[ i ] ] ) );

  }

  return children;

};
