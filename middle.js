/* Implement middle which will take in an array and return the middle-most element(s) of the given array.

The middle function should return an array with only the middle element(s) of the provided array. This means that the length of the returned elements could vary.

For arrays with one or two elements, there is no middle. Return an empty array.
For arrays with odd number of elements, an array containing a single middle element should be returned.
For arrays with an even number of elements, an array containing the two elements in the middle should be returned */


//FUNCTION IMPLEMENTATION


const middle = (input) => {
  const isOdd = function(number) {//side effect function check for odd or even
    if (number % 2 === 1) return true;
  };

  //define output as array
  const output = [];
  //condition1 - if array with one or two elements return []
  if (input.length < 3) return [];


  //condition2 - identify array with odd number of elements
  if (isOdd(input.length)) {
    // if condition2 true return single middle element as array
    //find middle index for odd and push to output
    output.push(input[(input.length - 1) / 2]);
    return output;
  }

  //condition3 - identify array with even number of elements
  //if condition 3 true return array of two middle elements
  if (!isOdd(input.length)) {
    // if condition2 true return two  middle elements as array
    output.push(input[Math.floor((input.length - 1) / 2)]),
    output.push(input[Math.floor((input.length - 1) / 2)] + 1);
  }
  //return output
  return output;
};

module.exports = middle;
