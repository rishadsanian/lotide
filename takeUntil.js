/* The function will return a "slice of the array with elements taken from the beginning." It should keep going until the callback/predicate returns a truthy value.

To keep things simple, the callback should only be provided one value: The item in the array.

Instruction
Implement takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
 */

const takeUntil = (array, callback) => {
  let output = [];
  for (let char of array) {
    if (!callback(char)) {
      output.push(char);
    } else return output;
  }
};

//Test functions

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

//Test cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
