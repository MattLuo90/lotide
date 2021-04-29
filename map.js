const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log("This two arrays are the same.");
  } else {
    console.log("This two arrays are not the same.");
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




const words = ["ground", "control", "to", "major", "tom"];

const map = (array,callback) => {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(eqArrays(results1,[ 'g', 'c', 't', 'm', 't' ]),true)