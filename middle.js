/* Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned */

//Test Functions
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

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

//FUNCTION IMPLEMENTATION
//side effect function check for odd or even
const isOdd = function(number) {
  if (number % 2 === 1) return true;
};
const middle = (input) => {
  //define output as array
  let output = [];
  //condition1 - identify array with one or two elements
  if (input.length === 1 || input.length === 2) {
    //if condition1 true output is empty array
    return output;
  }

  //condition2 - identify array with odd number of elements
  if (isOdd(input.length)) {
    // if condition2 true return single middle element as array
    //find middle index for odd and push to output
    output.push(input[(input.length - 1) / 2]);
    return output;
  }

  //condition3 - identify array with even number of elements
  //if condition 3 true return array of two middle elements
  if (!isOdd(input.length)) {
    // if condition2 true return two  middle elements as array
    output.push(input[Math.floor((input.length - 1) / 2)]),
    output.push(input[Math.floor((input.length - 1) / 2)] + 1);
  }
  //return output
  return output;
};

//Test Cases
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);

assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
