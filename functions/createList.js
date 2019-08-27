var create = require( './create' );

module.exports = function createList () {

  var root = create( { name: 'root' }, 'root' );

  root.index = 0;
  
  var list = [ JSON.stringify( root ) ];

  return list;

};
