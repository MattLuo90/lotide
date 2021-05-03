const eqArrays = require('./eqArrays');
const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    return "This two arrays are the same.";
  } else {
    return "This two arrays are not the same.";
  }
};

module.exports = assertArraysEqual;
