var checkObject = require( './checkObject' );
var checkList = require( './checkList' );

module.exports = function getChildrenParsed ( list, entity ) {

  checkObject( entity );
  checkList( list );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( JSON.parse( list[ entity.childrenIndices[ i ] ] ) );

  }

  return children;

};
