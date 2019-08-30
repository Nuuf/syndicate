const { 
  version,
  add,
  addToParent,
  create,
  createList,
  copyList,
  crunchList,
  eject,
  getAt,
  find,
  getChildren,
  getChildrenParsed,
  getPath,
  getRootEntities,
  getRootEntitiesParsed,
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
add( list, create( null, 'orphaned' ) );
swap( list, find( list, 'parentA' ), find( list, 'parentB' ) );
remove( list, find( list, 'parentB' ) );
add( list, create( null, 'childA' ), find( list, 'parentA' ) );
addToParent( list, find( list, 'orphaned' ), find( list, 'parentA' ) );
eject( list, find( list, 'orphaned' ) );
inject( list, create( null, 'injected' ), find( list, 'parentA' ), true );
remove( list, find( list, 'parentA' ) );

console.log( getChildren( list, find( list, 'root' ) ) );
// console.log( getPath( list, find( list, 'childA' ) ) );
console.log( renderListStructure( list, true ) );
crunchList( list );
console.log( renderListStructure( copyList( list ), true ) );
