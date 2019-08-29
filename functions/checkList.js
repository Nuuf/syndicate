/**
 * Throws an error if the passed list is no a syndicate list
 * 
 */
module.exports = function ( list ) {

  if ( !list || !list.__is_syndicate_list__ ) {

    throw new Error( 'SYNDICATE: NOT A SYNDICATE LIST' );
  
  }

};
