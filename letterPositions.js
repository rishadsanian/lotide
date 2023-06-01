/* Function letterPositions  will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

 */

//TEST FUNCTIONS
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

const assertArraysEqual = (actual, expected) => {
  eqArrays(actual, expected)
    ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
    : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
};

//Implement function
const letterPositions = (sentence) => {
  const results = {};
  // logic to update results here

  //remove spaces
  sentence = sentence.split(""); //.join("");

  //count increment
  //loop through each letter in sentence
  let count = 0;
  for (let char of sentence) {
    //add counter

    //add letter count increment as value
    if (results[char]) {
      //Checks if key already exists
      results[char].push(count); //push additional indices
    } else {
      results[char] = [count]; //initializes if does not exist with value of 1
    }
    count++;
  }
  //delete " " key
  delete results[" "];

  //return output object
  return results;
};

//TEST CASES
const input = "lighthouse in the house";
console.log(letterPositions(input)); //

const result1 = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12],
};

assertArraysEqual(letterPositions(input)["h"], result1["h"]); // should pass
assertArraysEqual(letterPositions(input)["l"], result1["l"]); //should pass
assertArraysEqual(letterPositions(input)["u"], result1["l"]); //should fail
assertArraysEqual(letterPositions("hello").e, [1]); //should pass
