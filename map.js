const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true ? "✅" : "🛑");
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

// Create map function that will take two arguments
//  1. An array to map
//  2. A callback function
// Map function will return a new array based on the results of the callback function

const map = function(array, callback) {
  // console.log("array:", array);
  // console.log("callback:", callback);

  const results = [];

  for (const element of array) {
    // console.log("Before callback:", element);
    // console.log("After callback:", callback(element));
    results.push(callback(element));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "T"]);
assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
assertArraysEqual(map(words, word => word[2]), ["o", "n", , "j", "m"]);
assertArraysEqual(map(words, word => word.length), [6, 7, 2, 5, 3]);