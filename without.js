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

module.exports = without;
//test cases
// console.log(without([1, 2, 3], [1])); // => [2, 3]
// console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

// const words = ["hello", "world", "lighthouse"];
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);

// let list = ["some", "other", "words"];
// assertArraysEqual(without(list, ["other"]), ["some", "words"]);

// list = ["1","1","2"];
// assertArraysEqual(without(list, [1]), ["1","1","2"]);

// list = ["1","1","2"];
// assertArraysEqual(without(list, ["1"]), [2]);
