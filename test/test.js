const { 
  version,
  add,
  addToParent,
  create,
  createList,
  crunchList,
  eject,
  find,
  getChildren,
  getChildrenParsed,
  getPath,
  getRootEntities,
  getRootEntitiesParsed,
  hasParent,
  inject,
  parsedFind,
  remove,
  renderListStructure,
  swap,
  switchParent,
  update
} = require( '../index' );

console.log( `Syndicate version: ${version}` );

const list = createList();

add( list, create( null, 'parentA' ) );
add( list, create( null, 'parentB' ) );

swap( list, find( list, 'parentA' ), find( list, 'parentB' ) );

remove( list, find( list, 'parentB' ) );

add( list, create( null, 'childA' ), find( list, 'parentA' ) );

console.log( getPath( list, find( list, 'childA' ) ) );

console.log( renderListStructure( list, true ) );
