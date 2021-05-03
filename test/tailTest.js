const assert = require('chai').assert;
const tail = require('../tail')
const words = ["Yo Yo", "Lighthouse", "Labs"];
describe("#tail", () => {
  it("returns true when the two arrays are the same", () => {
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});