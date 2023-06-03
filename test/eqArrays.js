const assertEqual = require("../assertEqual.js");
const eqArrays = require("../eqArrays.js");

// TEST CODE

assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);

assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3, "!"], [1, 2, 3, 5]), false);
assertEqual(eqArrays([0], [""]), false);
