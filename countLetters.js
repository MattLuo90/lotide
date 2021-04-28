const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function (sentence) {
  const answer = {};
  for (letter of sentence) {
    if (letter !== ' ') {
      if (answer[letter]) {
        answer[letter] += 1;
      } else {
        answer[letter] = 1;
      }
    }
  }
  return answer;
}

console.log(countLetters("lighthouse in the house"))