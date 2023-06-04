/* Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on the results of the callback function.
 */


const map = (array, callback) => {
  const results = [];
  array.forEach((item) => {
    results.push(callback(item));
  });
  return results;
};

module.exports = map;
// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, (word) => word[0]);
// console.log(results1);

// assertArraysEqual(["g", "c", "t", "m", "t"], results1);
// assertArraysEqual(
//   [4, 6, 8],
//   map([2, 3, 4], (number) => number * 2)
// );
