/* Function letterPositions  will return all the indices (zero-based positions) in the string where each character is found.

For each letter, instead of returning just one number to represent its number of occurrences, multiple numbers may be needed to represent all the places in the string that it shows up.

 */

//TEST FUNCTIONS

//Implement function
const letterPositions = (sentence) => {

  const results = {};

  //remove spaces
  sentence = sentence.split(""); //.join("");

  //loop through each letter in sentence

  //add position
  let position = 0;
  for (let char of sentence) {

    if (results[char]) { //Checks if key already exists

      results[char].push(position); //push additional indices
    } else {
      results[char] = [position]; //initializes if does not exist with value of 1
    }
    position++;
  }
  //delete " " key
  delete results[" "];

  //return output object
  return results;
};

module.exports = letterPositions;

//console.log(letterPositions("Silly Sally"));
// //TEST CASES
// const input = "lighthouse in the house";
// console.log(letterPositions(input)); //

// const result1 = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12],
// };

// assertArraysEqual(letterPositions(input)["h"], result1["h"]);
// assertArraysEqual(letterPositions(input)["l"], result1["l"]);
// assertArraysEqual(letterPositions(input)["u"], result1["u"]);
// assertArraysEqual(letterPositions("hello").e, [1]);
