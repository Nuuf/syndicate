var getChildrenParsed = require( './getChildrenParsed' );
var checkList = require( './checkList' );

/**
 * Returns a rendered string with a visualisation of the structure of a list
 * 
 */
module.exports = function generateListStructure ( list, includeNull ) {

  checkList( list );

  var str = '', i, entity;

  entity = list[ 0 ];

  function printEntity ( entity, string, level ) {

    string += 'id > ' + entity.id + ' : index > ' + entity.index + ' : level > ' + level + '\n';

    var i, j;
    var children = getChildrenParsed( list, entity );

    ++level;

    for ( i = 0; i < children.length; ++i ) {

      for ( j = 0; j < level; ++j ) {

        string += '\t';
        
      }

      string = printEntity( children[ i ], string, level );
        
    }

    return string;

  }

  for ( i = 0; i < list.length; entity = list[ ++i ] ) {

    if ( entity !== null ) {
          
      entity = JSON.parse( entity );

      str = printEntity( entity, str, 0 );

    } else if ( includeNull ) {

      str += 'null > index ' + i + '\n';
      
    } 

  }

  return str;
  
};