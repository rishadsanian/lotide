//Test Functions
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
const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. */

const flatten = (array) => {
  //Variables
  let flattenedArray = [];

  //Iterate through array
  for (let item of array) {
    //Identify if index is an array
    if (Array.isArray(item)) {
      //push each item from array to output variable
      for (let i of item) {
        flattenedArray.push(i);
      }
    } else {
      // if condition is false
      // Push to flatten array
      flattenedArray.push(item);
    }
  }

  //return flatten array
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); // pass
assertArraysEqual(flatten([1, 2, 3, [4], [5, 6]]), [1, 2, 3, 4, 5, 6]); //pass
