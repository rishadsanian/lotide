//Compares two arrays and returns truthy or falsy

// FUNCTION IMPLEMENTATION
//Compare Arrays
const eqArrays = (arr1, arr2) => {

  if (arr1.length !== arr2.length) {
    //check for length
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

module.exports = eqArrays;
