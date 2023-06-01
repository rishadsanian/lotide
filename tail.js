// FUNCTION IMPLEMENTATION Assert
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

// FUNCTION IMPLEMENTATION Tail
const tail = (array) => {
  return array.slice(1);
};

// TEST CODE

console.log(tail([1, 2, 3, 4]));
assertEqual(tail([2, 3, 4]), [3, 4]);//need to check with assertEqualArray
console.log(tail([2, 3, 4]));
// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
console.log(tail(words));