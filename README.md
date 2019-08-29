# Syndicate

## A connected list of strings.

```js
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

// Output
/*
 Syndicate version: 1.0.0
[
  '{"__is_syndicate_object__":true,"parentIndex":0,"parentId":"root","index":5,"id":"injected","data":{},"childrenIndices":[],"childrenIds":[]}',
  '{"__is_syndicate_object__":true,"parentIndex":0,"parentId":"root","index":3,"id":"orphaned","data":{},"childrenIndices":[],"childrenIds":[]}'
]
id > root : index > 0 : level > 0
        id > injected : index > 5 : level > 1
        id > orphaned : index > 3 : level > 1
null > index 1
null > index 2
null > index 4

id > root : index > 0 : level > 0
        id > injected : index > 2 : level > 1
        id > orphaned : index > 1 : level > 1
 */
```
