const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let y = 0; y < array1.length; y++) {
      if (array1[y] !== array2[y]) {
        console.log("This two arrays are not the same.");
      }
    }
    console.log("This two arrays are the same.");
  } else {
    console.log("This two arrays are not the same.");
  }
};
console.log(eqArrays([1, 2, 3],[1, 2, 3]));