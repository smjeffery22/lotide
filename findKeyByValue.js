const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// Take an object and a value
// Can the object and return the first key which contains the given value
// If not found, return undefined
const findKeyByValue = function(list, find) {
  // Loop through the value
  // If found, return key
  const listKeys = Object.keys(list);
  // listValues = Object.values(list);
  // console.log("listKeys:", listKeys);
  // console.log("listValues:", listValues);

  for (const currentKey of listKeys) {
    // console.log("currentKey", currentKey);
    // console.log("currentValue", list[currentKey]);
    if (list[currentKey] === find) {
      return currentKey;
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const favouriteSportsPlayer = {
  Baseball: "Roy Halladay",
  Soccer: "Ji Sung Park",
  lol: "Faker"
  };

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));

console.log(findKeyByValue(favouriteSportsPlayer, "Roy Halladay"));
console.log(findKeyByValue(favouriteSportsPlayer, "Ji Sung Park"));
console.log(findKeyByValue(favouriteSportsPlayer, "Faker"));