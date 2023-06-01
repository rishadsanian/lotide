//Test functions
const assertEquals = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
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

/* function eqObjects which will take in two objects and returns true or false, based on a perfect match.

They have the same number of keys
The value for each key in one object is the same as the value for that same key in the other object

*/

//Function Implementations
const eqObjects = (object1, object2) => {
  //convert keys and values to array variables
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  const values1 = Object.values(object1);
  const values2 = Object.values(object2);

  return assertEquals(
    ///Check Keys Function
    eqArrays(keys1, keys2),
    //Check Values Function
    eqArrays(values1, values2)
  );
};

//Test Cases

//Test keys
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject, anotherShirtObject); // => true

const longSleeveShirtObject = {
  size: "medium",
  color: "red",
  sleeveLength: "long",
};
eqObjects(shirtObject, longSleeveShirtObject); // => false

//Test values
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
};
eqObjects(multiColorShirtObject, anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject); // => false
