const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns  the length of 2 for the tail of ['Hello', 'Lighthouse', 'Labs']", () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result.length, 2);
  });

  it(`returns "Lighthouse" as the first element in the tail of ['Hello', 'Lighthouse', 'Labs']`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[0], "Lighthouse");
  });

  it(`returns "Labs" as the second element in the tail of ['Hello', 'Lighthouse', 'Labs']`, () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.deepEqual(result[1], "Labs");
  });

  it("returns [] for an empty array", () => {
    const result = tail([]);
    assert.deepEqual(result, []);
  });

  it("returns [] for an array with a single element ['Hello']", () => {
    const result = tail(["Hello"]);
    assert.deepEqual(result, []);
  });

  // Additional test case
  it("does not modify the original array", () => {
    let words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.deepEqual(words.length, 3);
    assert.deepEqual(words[0], "Yo Yo");
    assert.deepEqual(words[1], "Lighthouse");
    assert.deepEqual(words[2], "Labs");
  });
});

/* // Test Case 1: Check the returned array elements

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements done


assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse" done


assertEqual(result[1], "Labs"); // ensure second element is "Labs"done


// Test Case: Check the original array


let words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

words = [];
assertEqual(tail(words), "[]"); done

words = ["Hello"];
assertEqual(tail(words), "[]"); done */
