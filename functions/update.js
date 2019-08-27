module.exports = function update ( list, entity ) {

  if ( 
    entity.__is_syndicate_object__ !== true
  ) throw new Error( 'SYNDICATE: NOT A SYNDICATE OBJECT' );

  list[ entity.index ] = JSON.stringify( entity );

};
