module.exports = function getChildren ( list, entity ) {

  if ( 
    entity.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

  var i = 0, children = [];

  for ( ; i < entity.childrenIndices.length; ++i ) {

    children.push( list[ entity.childrenIndices[ i ] ] );

  }

  return children;

};
