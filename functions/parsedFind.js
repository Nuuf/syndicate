var checkList = require( './checkList' );

module.exports = function findParsed ( list, id ) {

  checkList( list );

  var i = 0;

  for ( ; i < list.length; ++i ) {

    if ( list[ i ] !== null && list[ i ].id === id ) return list[ i ];
  
  }

  return null;

};
