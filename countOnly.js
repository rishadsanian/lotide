//Test Functions
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* countOnly will be given an array and an object. It will return an object containing counts of everything that the input object listed.

only keys which have a truthy value should be counted in the resulting object. All other strings (either set to false or not included at all in the object) should not be counted. That said, if a particular string is meant to be counted but does not exist in the input array (like "f" in the example above), it also does not have to be included in the final count.

The function should report back how many instances of each string were found in the allItems array of strings
[a,a,b,a] filter {a:true, b:false, f:true} result {a:3} */

//Initial Function Definition
//all items - array of strings that we need to look through
// itemsToCount - an object specifying what to count.

const countOnly = (allItems, itemsToCount) => {
  //define output
  const results = {};
  // Add code to loop over all the items in the array and print them to the console.
  for (const item of allItems) {
    //Check with Items to count first
    if (itemsToCount[item]) {
    //if match truthy then increment by 1 for each person
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  //return output
  console.log(results);
  return results;
};

//Test Cases

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
