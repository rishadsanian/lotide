//checks if two arrays are equal
//Function Implementation
const eqArrays = (actual, expected) => {
  // Compare lengths
  if (actual.length !== expected.length) {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
    process.exit();
  }

  // Iterate through each index of the array
  
  for (let index in actual) {
    console.log(actual[index], expected[index]);
    // Compare the indices in arrrays
    if (actual[index] !== expected[index]) {
    
      console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
      process.exit();
    }
  }

  // If all elements match, return true
  console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
};

