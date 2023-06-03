const assertEqual = require("../assertEqual.js");
const head = require("../head.js");

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["Hello"]), "Hello");
assertEqual(head([1]), 1);
assertEqual(head([]), undefined);
