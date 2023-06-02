// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  console.log(
    actual === expected
      ? `🟢🟢🟢 Assertion Passed: ${actual} === ${expected}` //true
      : `🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`//false
  );
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp"); //fail
assertEqual(1, 1); //pass
