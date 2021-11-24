const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

for (const item of allItems) {
  console.log(item);
  // Executed to count if the name is stored in itemsToCount object
  if (itemsToCount[item]) {
    if (results[item]) {
      // Add item as key to results object and the count as value
      // If it already exists in results object
      results[item] += 1;
    } else {
      // Add item as key to results object and the count as value
      // If it does not already exist in results object
      results[item] = 1;
    }
  }
}
  return results;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
console.log(assertEqual(result1["Agouhanna"], undefined));