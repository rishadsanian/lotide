//Test functions

/* Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.
 */

const findKeyByValue = (obj, val) => {
  //scan through all array of keys in object
  for (let key of Object.keys(obj)) {
    //if value matches object's key value
    if (obj[key] === val) {
      //return key
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;

// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire",
// };

// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
