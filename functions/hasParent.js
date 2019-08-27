module.exports = function hasParent ( string ) {

  return string.substr( 32, 16 ) !== '"parentIndex":-1';

};
