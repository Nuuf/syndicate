module.exports = function getChildrenParsed ( list, entity ) {

  if ( 
    entity.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( JSON.parse( list[ entity.childrenIndices[ i ] ] ) );

  }

  return children;

};
