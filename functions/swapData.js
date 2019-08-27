module.exports = function swapData ( a, b, data ) {

  var t = a[ data ];

  a[ data ] = b[ data ];
  b[ data ] = t;

};
