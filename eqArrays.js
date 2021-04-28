const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);