// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");//fail
assertEqual(1, 1);//pass
