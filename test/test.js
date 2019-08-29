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
