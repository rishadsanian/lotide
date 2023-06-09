// Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

//Function Implementation
const findKey = (obj, callback) => {
  for (let key of Object.keys(obj)) {
    //for each key in the object

    if (callback(obj[key])) {
      //checks for condition on the key
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;

// //Test functions
// const assertEqual = (actual, expected) => {
//   actual === expected
//     ? console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`)
//     : console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
// };
// //test cases
// const test1 = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 2
// );

// const result1 = "noma";

// assertEqual(test1, result1);

// const OneStarHotels = findKey(
//   {
//     "Blue Hill": { stars: 1 },
//     Akaleri: { stars: 3 },
//     noma: { stars: 2 },
//     elBulli: { stars: 3 },
//     Ora: { stars: 2 },
//     Akelarre: { stars: 3 },
//   },
//   (x) => x.stars === 1
// );

// console.log(OneStarHotels);

// // const result2 = "Blue Hill";

// assertEqual(test2, result2);
