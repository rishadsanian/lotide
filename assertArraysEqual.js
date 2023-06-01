//checks if two arrays are equal

//Side Effect function
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

//Function Implementation
const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

//Test
assertArraysEqual([0, 1, 2], ["0", 2, 2]);
assertArraysEqual([0, 1, 3], [0, 1, 3]);
