const eqArrays = function (array1, array2) {
  if (array1.length === array2.length) {
    for (y = 0; y < array1.length; y++) {
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
    console.log("This two arrays are the same.");
  } else {
    console.log("This two arrays are not the same.");
  }
};

const middle = function (array) {
  if (array.length > 2) {
    let newArray = [];
    if (array.length % 2 === 0) {
      index = array.length / 2;
      newArray.push(array[index - 1], array[index]);
    } else {
      index = array.length / 2
      console.log(index);
      newArray.push(array[Math.floor(index)])
    }
    return newArray;
  }
}
console.log(middle([1, 2, 3, 4]));

console.log(assertArraysEqual(middle([1, 2, 3, 4]), [2,3]));