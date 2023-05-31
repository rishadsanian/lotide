/*

Implement without which will return a subset of a given array, removing unwanted elements.

This function should take in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.

*/

//Function Implementation

const without = (source, itemsToRemove) => {
  //declare variable for output
  let remainingItems = [];
  //filter out itemsToRemove
  for (let item of source) {
    if (!itemsToRemove.includes(item)) {
      //push out remaining items to output variable
      remainingItems.push(item);
    }
  }
  //return output variable
  return remainingItems;
};

//Test
const assertArraysEqual = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    return;
  }

  // Iterate through each index of the array
  for (let index in actual) {
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      return;
    }
  }

  // If all elements match, return true
  console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
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



console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

let list = ["some", "other", "words"];
assertArraysEqual(without(list, ["other"]), ["some", "words"]);

list = ["1","1","2"];
assertArraysEqual(without(list, [1]), ["2"]);//fail as expected

list = ["1","1","2"];
assertArraysEqual(without(list, ["1"]), [2]);//fail as expected
