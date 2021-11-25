const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true ? "✅" : "🛑");
};

// Compare each element of the two arrays in order
// Determine if true or false
// If all true, return true
// If at least one is false, return false
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

// Take a string and return all the indices in the string where each character is found
// Multiples numbers for a character may be needed

const letterPositions = function(sentence) {
  const results = {};
  
  // logic to update results here
  // Loop through the string
  // For each character found, delcare an empty array
  // Push the index number of the character into the array
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (results[character]) {
      results[character].push(i);
    } else {
      if (character !== " ") {
        results[character] = [i];
      }
   }
  }
  return results;
};

console.log(letterPositions("Hello Hello"));
assertArraysEqual(letterPositions("Hello Hello")["H"], [0, 6]);

console.log(letterPositions("ABC DEF ABC"));
assertArraysEqual(letterPositions("ABC DEF ABC")["A"], [0, 8]);