//Side Effect function
const eqArrays = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    return false;
  }

  // Iterate through each index of the array
  for (let index of actual) {
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
      return false;
    }
  }

  // If all elements match, return true
  return true;
};

//checks if two arrays are equal
//Function Implementation
const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`)
    : console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
};

//Test
assertArraysEqual([0, 1, 2], ["0", 2, 2]);
