const assertEqual = require("../assertEqual");
const tail = require("../tail.js");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

// Test Case: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"