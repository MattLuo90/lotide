const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

console.log(middle([1, 2, 3, 4]));

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));