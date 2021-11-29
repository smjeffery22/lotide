const eqArrays = require("./eqArrays");

const assertArraysEqual = function(arrayOne, arrayTwo) {
  console.log(eqArrays(arrayOne, arrayTwo) === true ? "✅" : "🛑");
};

module.exports = assertArraysEqual;