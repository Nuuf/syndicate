var shiftDelete = require( './shiftDelete' );
var popDelete = require( './popDelete' );

module.exports = function fickleSplice ( array, index ) {

  if ( index > array.length * 0.5 ) return popDelete( array, index );

  return shiftDelete( array, index );
  
};
