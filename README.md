# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

<br>

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

<br>

## Usage

**Install it:**

`npm install @rishadalam/lotide`

**Require it:**

`const _ = require('@rishadalam/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

<br>

## Documentation

The following functions are currently implemented:

<br>

* `assertArraysEqual(actual, expected)`:
   Checks if two arrays are a perfect match and returns an assert message.

<br>

* `assertEqual(actual, expected)`:
Checks if two primitive data types are a match and returns an assert message.

<br>

* `assertObjectsEqual(actual, expected)`: 
Checks if two objects are a perfect match and returns an assert message. Checks for number of keys, key names and value pairs.

<br>

* `countLetters(sentence)`: Takes in a sentence (as a string) and then return an object with each letter as key and a count of the number of times that letter has been used in the sentence as the value.

<br>

* `countOnly(allItems, itemsToCount)`: Takes in an array of items and an object of item keys with truthy or falsy values. The function will take the keys with truthy values in the object and filter out those elements and return the number of times the value appears in the array. 

  * For example, `countOnly[a,a,b,a,c] {a:true, b:false, f:true}` will return  `{a:3}`

<br>

* `eqArrays(arr1, arr2) `: Compares two arrays for a match and returns truthy or falsy

<br>

* `eqObjects(object1, object2)`: Takes in two objects and returns truthy or falsy based on a perfect match. Checks for number of keys, key names and value pairs.

<br>

* `findKey(obj, callback)`: Takes in an object and a callback. It should scan the object and return the first key for the callback and returns a truthy value. If no key is found, it will return undefined.


   * For example, the function will return `"Blue Hill"` for the below:

      `const OneStarHotels = findKey( 
  {
    "Blue Hill": { stars: 1 },
    Akaleri: { stars: 3 },
    noma: { stars: 2 },
    elBulli: { stars: 3 },
    Ora: { stars: 2 },
    Akelarre: { stars: 3 },
  },
  (x) => x.stars === 1
);`.

<br>

* `findKeyByValue(obj, val) `: Takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined.

<br>

* `flatten(array)`: Takes in an array containing elements including nested arrays of elements, and return a "flattened" version of the array.
  
  * For example, `flatten([1, 2, [3, 4], 5, [6]])` will return `[ 1, 2, 3, 4, 5, 6 ]`.
  
<br>

* `head(array)`: Takes in an array and returns the first element of the array.

<br>

* `letterPositions(sentence)`: Takes in a string and returns an object with all the indices (zero-based positions) in the string where each character is found.
  
  * For example, for:  
    `letterPositions("Silly Sally")`

    returns:
     `{S: [ 0, 6 ], i: [ 1 ], l: [ 2, 3, 8, 9 ], y: [ 4, 10 ], a: [ 7 ] }`

<br>

* `map(array, callback)`: Takes in an array and callback function which  returns a new array based on the results of the callback function.

<br>

* `middle(input)`: Takes in an array and returns an array with only the middle element(s) of the provided array. 

  For arrays with one or two elements, there is no middle, so an empty array will be returned.
  
  For arrays with odd number of elements, an array containing a single middle element will be returned.

  For arrays with an even number of elements, an array containing the two elements in the middle will be returned *

<br>

  * `tail(array)`: Takes in an array and returns the "tail" of an array: everything except for the first item (head) of the provided array.

<br>

  * `takeUntil(array, callback)`:  Takes in an array and a callback and returns an array till the first instance of the callback condition.

<br>

* `without(source, itemsToRemove)`: Takes in a source array and a itemsToRemove array. It should return a new array with only those elements from source that are not present in the itemsToRemove array.