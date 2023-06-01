/* function eqObjects which will take in two objects and returns true or false, based on a perfect match.

They have the same number of keys
The value for each key in one object is the same as the value for that same key in the other object

*/

//Test functions
const assertEqual = (actual, expected) => {
  actual === expected
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};
//Function Implementations
//Side Effect functions
const eqArrays = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    return false;
  }
  // Iterate through each index of the array
  for (let i of actual) {
    // Compare the indices in arrrays
    if (actual[i] !== expected[i]) {
      return false;
    }
  }

  // If all elements match, return true
  return true;
};

//Main Functon
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

//Test Cases

//Test keys
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true
assertEqual(eqObjects(shirtObject, anotherShirtObject), true);
const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
console.log(eqObjects(shirtObject, longSleeveShirtObject)); // => false
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false);
//Test values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
console.log(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject)); // => true
assertEqual(
  eqObjects(multiColorShirtObject, anotherMultiColorShirtObject),
  true
);
const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject)); // => false
assertEqual(
  eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject),
  false
);
