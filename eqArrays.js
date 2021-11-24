// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false
const eqArrays = function(arrayOne, arrayTwo) {
  let check = true;
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  
  for (let i = 0; i < arrayOne.length; i++) {
    arrayOne[i] === arrayTwo[i] ? check = true : check = false;
    if (check === false) {
      return false;
    }
  }
  return check;
};

// TEST CODE
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true)); // => should PASS