// FUNCTION IMPLEMENTATION Tail
const tail = (array) => {
  if (array.length === 0) return [];
  //if (array.length === 1) return [];

  return array.slice(1);
};

// TEST CODE

module.exports = tail;
