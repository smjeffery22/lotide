const assertEqual = require("../assertEqual");
const head = require("../head.js");

// TEST CODE
console.log(assertEqual(head([]), 5));
console.log(assertEqual(head([]), ));
console.log(assertEqual(head([5]), 5));
console.log(assertEqual(head([5,6,7]), 5));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello"));
console.log(assertEqual(head([5,6,7]), 6));
console.log(assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Bootcamp"));

// git repo test