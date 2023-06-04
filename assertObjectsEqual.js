const eqObjects = require("./eqObjects");

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

module.exports = assertObjectsEqual;
//Test

// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: 3 });//pass
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, b: 2, c: "3" });//fail
// assertObjectsEqual({ a: 1, b: 2, c: 3 }, { a: 1, c: 3 });//fail
