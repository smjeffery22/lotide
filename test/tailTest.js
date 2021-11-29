const assert = require("chai").assert
const tail = require("../tail.js");

describe("#tail", () => {
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(['Yo Yo', 'Lighthouse', 'Labs'].length, 3)
  })

  it("returns 'Lighthouse' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(tail(['Hello', 'Lighthouse', 'Labs'])[1], "Labs")
  })
});