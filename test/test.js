/* eslint-disable no-unused-vars */
const { 
  add,
  addToParent,
  create,
  createList,
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
console.log( renderListStructure( list, true ) );

const list2 = createList();

add( list2, create( { name: 'path' }, 'first' ) );
add( list2, create( { name: 'to' }, 'second' ), find( list2, 'first' ) );
add( list2, create( { name: 'entity' }, 'third' ), find( list2, 'second' ) );
console.log( getPath( list2, find( list2, 'third' ), [ 'name' ], true ) );

inject( list2, create( { name: 'inject1' }, 'inject1' ), find( list2, 'third' ), true );
inject( list2, create( { name: 'inject2' }, 'inject2' ), find( list2, 'inject1' ) );
console.log( renderListStructure( list2, true ) );
