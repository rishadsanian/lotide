//Compares two arrays and returns truthy or falsy

// FUNCTION IMPLEMENTATION
//Compare Arrays
const eqArrays = (arr1, arr2) => {
  
  //check for length
  if (arr1.length !== arr2.length) {
    return false;
  }

  //check for match false
  for (let i in arr1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
};

//TEST functions
const assertEqual = (arr1, arr2) => {
  arr1 === arr2
    ? console.log(`🟢🟢🟢 Assertion Passed: ${arr1} === ${arr2}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${arr1} !== ${arr2}`);
};

// TEST CODE

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3,"!"], [1, 2, 3, 5]), false);
assertEqual(eqArrays([0], [""]), false);