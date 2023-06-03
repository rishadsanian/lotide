// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
      ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` //true
      : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`//false
  );
};


module.exports = assertEqual;