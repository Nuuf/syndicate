module.exports = function updateChildrenIndices ( list, entity ) {

  var i = 0, child, childIndex;
    
  if ( entity.childrenIndices.length > 0 ) {
        
    for ( ; i < entity.childrenIndices.length; ++i ) {
    
      childIndex = entity.childrenIndices[ i ];
      child = JSON.parse( list[ childIndex ] );
      child.parentIndex = entity.index;
      list[ childIndex ] = JSON.stringify( child );
    
    }
    
  }
    
};
