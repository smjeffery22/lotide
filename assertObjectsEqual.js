// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect; // <= add this line

  return eqObjects(actual, expected) === true ? `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`;

};

const eqObjects = function(object1, object2) {
  // Take list of keys from object1
  // Take list of keys from object2
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);

  // Take list of values from object1
  // Take list of values from object2
  const object1Values = Object.values(object1);
  const object2Values = Object.values(object2);

  // Compare the length of key and value arrays
  //  If any of the two does not match, return false
  if (object1Keys.length !== object2Keys.length || object1Values.length !== object2Values.length) {
    return false;
  }

  // Compare each object's key's values one by one
  //   If not match, return false
  for (const currentKey of object1Keys) {
    // If the value of the key is an array, the first if statement gets executed
    if (Array.isArray(object1[currentKey])) {
      // If the two arrays are not equal, the following if statement gets executed (!false = true)
      if (!eqArrays(object1[currentKey], object2[currentKey])) {
        // console.log("array not equal");
        return false;
      }
    } else if (object1[currentKey] !== object2[currentKey]) {
      return false;
    }
  }
     // If all match, return true
  return true;
};

const eqArrays = function(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  if (!Array.isArray(arrayOne) || !Array.isArray(arrayTwo)) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, ba));
console.log(assertObjectsEqual(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertObjectsEqual(cd, dc));
console.log(assertObjectsEqual(cd, cd2));
// console.log(`Example label: ${inspect(actual)}`);
