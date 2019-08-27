module.exports = function traversePath ( list, path, entity, attributes ) {

  var i = 0;
    
  path.index.push( entity.index );
    
  if ( attributes ) {
    
    for ( ; i < attributes.length; ++i ) {
            
      path[ attributes[ i ] ].push( entity.data[ attributes[ i ] ] );
    
    }
        
  }
    
  if ( entity.parentIndex !== -1 ) {
    
    return traversePath(
      list,
      path, 
      JSON.parse( list[ entity.parentIndex ] ),
      attributes
    );
        
  }
    
  return path;
    
};
