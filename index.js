var Syndicate = {
  version: '1.0.0',
  add: require( './functions/add' ),
  addToParent: require( './functions/addToParent' ),
  create: require( './functions/create' ),
  createList: require( './functions/createList' ),
  copyList: require( './functions/copyList' ),
  crunchList: require( './functions/crunchList' ),
  eject: require( './functions/eject' ),
  find: require( './functions/find' ),
  getAt: require( './functions/getAt' ),
  getChildren: require( './functions/getChildren' ),
  getChildrenParsed: require( './functions/getChildrenParsed' ),
  getPath: require( './functions/getPath' ),
  getRootEntities: require( './functions/getRootEntities' ),
  getRootEntitiesParsed: require( './functions/getRootEntitiesParsed' ),
  inject: require( './functions/inject' ),
  parsedFind: require( './functions/parsedFind' ),
  remove: require( './functions/remove' ),
  renderListStructure: require( './functions/renderListStructure' ),
  swap: require( './functions/swap' ),
  switchParent: require( './functions/switchParent' ),
  update: require( './functions/update' )
};

module.exports = Syndicate;
