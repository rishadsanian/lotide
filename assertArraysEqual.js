//checks if two arrays are equal
const eqArrays = require("./eqArrays");

//Function Implementation
const assertArraysEqual = (actual, expected) => {
  console.log(
    eqArrays(actual, expected)
      ? `🟢🟢🟢 Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`
      : `🔴🔴🔴 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`
  );
};
module.exports = assertArraysEqual;

