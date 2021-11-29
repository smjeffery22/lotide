const assert = require("chai").assert;
const middle = require("../middle");

// TEST CODE

// console.log(middle([])); // => []
// assertArraysEqual(middle([]), []);
// console.log(middle([1])); // => []
// assertArraysEqual(middle([1]), []);
// console.log(middle([1, 2])); // => []
// assertArraysEqual(middle([1, 2]), []);

// console.log(middle([1, 2, 3])); // => [2]
// assertArraysEqual(middle([1, 2, 3]), [2]);
// console.log(middle([1, 2, 3, 4, 5])); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

// console.log(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3]);

describe("#middle", () => {
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });

  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
})