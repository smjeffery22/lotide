const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  // Take list of keys from object1
  // Take list of keys from object2
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  // console.log("object1Keys:", object1Keys, "object1Keys length:", object1Keys.length);
  // console.log("object2Keys:", object2Keys, "object2Keys length:", object2Keys.length);

  // Take list of values from object1
  // Take list of values from object2
  const object1Values = Object.values(object1);
  const object2Values = Object.values(object2);
  // console.log("object1Values:", object1Values, "object1Values length:", object1Values.length);
  // console.log("object2Values:", object2Values, "object2Values length:", object2Values.length);

  // Compare the length of key and value arrays
  //  If any of the two does not match, return false
  if (object1Keys.length !== object2Keys.length || object1Values.length !== object2Values.length) {
    return false;
  }

  // Compare each object's key's values one by one
  //   If not match, return false
  for (const currentKey of object1Keys) {
    // If the value of the key is an array, the first if statement gets executed
    // console.log(currentKey);
    if (Array.isArray(object1[currentKey])) {
      // console.log("Two arrays:", object1[currentKey], object2[currentKey]);
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

// TEST CODES
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

console.log(assertEqual(eqObjects(ab, ab), true));
console.log(assertEqual(eqObjects(ab, abc), false));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false

console.log(assertEqual(eqObjects(cd, dc), true));
console.log(assertEqual(eqObjects(cd, cd2), false));
