const assertArraysEqual = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    process.exit();
  }

  // Iterate through each index of the array

  for (let index in actual) {
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      process.exit();
    }
  }

  // If all elements match, return true
  console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
};
const eqArrays = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    return false;
  }
  // Iterate through each index of the array
  for (let index in actual) {
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
      return false;
    }
  }
  // If all elements match, return true
  return true;
};

/*
Create a function flatten which will take in an array containing elements including nested arrays of elements, and return a "flattened" version of the array. */

const flatten = (array) => {
  //Variables
  let flattenedArray = [];

  //Iterate through array
  for (let item in array) {
    //Identify if index is an array
    if (Array.isArray(item)) {
      //Concat with flatten array if condition is true
      flattenedArray.concat(item);
    }
    // if condition is false
    if (!item.isArray) {
      // Push to flatten array
      flattenedArray.push(item);
    }
  }
  //return flatten array
  return flattenedArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
assertArraysEqual([flatten([1, 2, [3, 4], 5, [6]])],[1, 2, 3, 4, 5, 6]);
console.log(eqArrays[[flatten([1, 2, [3, 4], 5, [6]])],[1, 2, 3, 4, 5, 6]]);