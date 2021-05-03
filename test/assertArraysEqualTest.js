const assert = require('chai').assert;
const assertArraysEqual   = require('../assertArraysEqual');

describe("#hassertArraysEqual", () => {
  it("returns this two arrays are the same", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3],[1, 2, 3]), 'This two arrays are the same.');
  });
});