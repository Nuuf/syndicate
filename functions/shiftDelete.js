module.exports = function shiftSplice ( array, index ) {

  if ( array.length < 1 ) return;
  var returnee = array[ index ];

  while ( index > 0 ) {

    array[ index ] = array[ index - 1 ];
    index--;
  
  }

  array.shift();

  return returnee;

};
