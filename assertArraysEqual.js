//checks if two arrays are equal
//Function Implementation
const assertArraysEqual = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    process.exit();
  }

  // Iterate through each index of the array
  
  for (let index in actual) {
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
    
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      process.exit();
    }
  }

  // If all elements match, return true
  console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
};


//Test
assertArraysEqual([0,1,2],["0",2,2]);

