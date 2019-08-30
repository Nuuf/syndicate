var checkList = require( './checkList' );

/**
 * Returns a copy of a list
 * 
 */
module.exports = function copyList ( list ) {

  checkList( list );

  var newList = list.slice();

  newList.__is_syndicate_list__ = true;

  return newList;
    
};
