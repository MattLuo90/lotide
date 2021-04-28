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



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if(results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);
console.log(letterPositions("Lighthouse is house"))