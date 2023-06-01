//side effect functions
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

const eqObjects = (object1, object2) => {
  //convert keys and values to array variables
  const keys1 = Object.keys(object1).sort();
  const keys2 = Object.keys(object2).sort();
  const values1 = Object.values(object1).sort();
  const values2 = Object.values(object2).sort();

  return (
    ///Check Keys Function
    eqArrays(keys1, keys2) &&
    //Check Values Function
    eqArrays(values1, values2)
  );
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  eqObjects(actual, expected)
    ? console.log(
      `🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`
    )
    : console.log(
      `🔴🔴🔴 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`
    );
};

//Test

assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });//pass
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: "3" });//fail
assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, c: 3 });//fail
