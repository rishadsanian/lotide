//Test Functions
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🔴🔴🔴 Assertion Failed: ${actual} !== ${expected}`);
  }
};

/* The function should take in a sentence (as a string) and then return a count of each of the letters in that sentence.

For example, countLetters('LHL') should return results indicating that L appears twice, and H once.

Before implementing this function, we need to think about how it will report back these counts. It's not that we want to know how many H's are in this sentence?, because that would just be a number. We need it report back multiple numbers. */

//FUNCTION IMPLEMENTATION

const countLetters = (sentence) => {
  const output = {};
  //remove spaces
  //sentence = sentence.split(" ").join("");
  console.log(sentence);
  //count increment
  //loop through each letter in sentence
  for (let letter of sentence) {
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }

  //add letter count increment as value
  //return output object
  console.log(output);
  return output;
};

//TEST CASES
const input = "lighthouse in the house";
const result1 = countLetters(input, {
  l: 1,
  i: 2,
  g: 1,
  h: 4,
  t: 2,
  o: 2,
  u: 2,
  s: 2,
  e: 3,
  n: 1,
});

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1[/\s/], undefined);
