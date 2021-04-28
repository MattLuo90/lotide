const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log("This two arrays are the same.");
  } else {
    console.log("This two arrays are not the same.");
  }
};

console.log(assertArraysEqual());