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

module.exports = middle;