/**
 * Searches for an entity in a list of parsed entities, finding it by id
 * 
 */
module.exports = function findParsed ( list, id ) {

  var i = 0;

  for ( ; i < list.length; ++i ) {

    if ( list[ i ] !== null && list[ i ].id === id ) return list[ i ];
  
  }

  return null;

};
