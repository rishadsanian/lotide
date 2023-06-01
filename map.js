/* Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
 */

//test functions

const map = (array, callback) => {
  const results = [];
  array.forEach((item) => {
    results.push(callback(item));
  });
  return results;
};

const eqArrays = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    return false;
  }

  // Iterate through each index of the array
  for (let i in actual) {
    // Compare the indices in arrrays
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  // If all elements match, return true
  return true;
};
const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, (word) => word[0]);
console.log(results1);

assertArraysEqual(["g", "c", "t", "m", "t"], results1);
assertArraysEqual(
  [4, 6, 8],
  map([2, 3, 4], (number) => number * 2)
);
