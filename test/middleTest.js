const assert = require('chai').assert;
const middle = require('../middle');
describe("#middle", () => {
  it("returns the same arrays", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  });
});