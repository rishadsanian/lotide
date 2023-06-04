const assertEqual = require("../assertEqual");

// TEST CODE
console.log("assertEqual Test Fail scenario: ");
assertEqual("Lighthouse Labs", "Bootcamp"); //fail
console.log("assertEqual Test Pass scenario: ");
assertEqual(1, 1); //pass
