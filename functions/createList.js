var create = require( './create' );

module.exports = function createList () {

  var root = create( { name: 'root' }, 'root' );

  root.index = 0;
  
  var list = [ JSON.stringify( root ) ];

  list.__is_syndicate_list__ = true;

  return list;

};
