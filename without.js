const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (let y = 0; y < array1.length; y++) {
      if (array1[y] !== array2[y]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log("This two arrays are not the same.");
  } else {
    console.log("This two arrays are not the same.");
  }
};


console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));



const without = function (source, itemsToRemoved) {
  let newArray = source;
  for (let i = 0; i < itemsToRemoved.length; i++) {
    newArray = newArray.filter(function(items) {
      return items !== itemsToRemoved[i];
    })
  }
  return newArray;
}
console.log(without([1, 2, 3], [1]))
console.log(without(["1", "2", "3"], [1, 2, "3"]))