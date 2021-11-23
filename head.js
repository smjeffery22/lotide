// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? `✅✅✅ Assertion Passed: ${actual} === ${expected}` : `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
};

const head = function(data) {
  return data[0];
}

// TEST CODE
console.log(assertEqual(head([]), 5));
console.log(assertEqual(head([]), ));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5,6,7]), 6));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bootcamp"));