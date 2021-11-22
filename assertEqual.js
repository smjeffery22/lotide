// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected ? "✅✅✅ Assertion Passed: " + actual + " === " + expected : "🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected;
};

// TEST CODE
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual("Lighthouse Labs", "Lighthouse Labs"));
console.log(assertEqual(1, 1));
console.log(assertEqual(1, 2));