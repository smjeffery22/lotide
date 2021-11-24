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

// Take in a source array and an array that contains items to remove from the source array
// Return a new array without the items that were removed
const without = function(source, itemsToRemove) {
  let removedSource = [];
  let itemChecker = 0;
  // Take the first element of the first array and compare to each element of the second array
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        itemChecker++;
        // console.log("itemChecker for i =", i, "is:", itemChecker);
      }
    }
    if (itemChecker === 0) {
      removedSource.push(source[i]);
    }
    itemChecker = 0;
  }
  return removedSource;
};

console.log("New array:", without([1, 2, 3], [2])); // => [2, 3]
console.log("New array:", without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log("New array:", without(["1", "2", "3", "Hello", 10, 105], [1, 2, "3", 104, "Hello"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);



// Using .include() method
// TO BE CONTINUED - TOO TIRED
// const without = function(source, itemsToRemove) {
//   let removedSource = [];
//   let itemChecker = 0;
//   // Take the first element of the first array and compare to each element of the second array
//   for (let i = 0; i < source.length; i++) {
//     for (let j = 0; j < itemsToRemove.length; j++) {
//       if (source[i] === itemsToRemove[j]) {
//         itemChecker++;
//         // console.log("itemChecker for i =", i, "is:", itemChecker);
//       }
//     }
//     if (itemChecker === 0) {
//       removedSource.push(source[i]);
//     }
//     itemChecker = 0;
//   }
//   return removedSource;
// };