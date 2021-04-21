var assert = require('assert');
var Calculator = require('../../lib/calculator.js');

describe('Calculator', function() {
  describe('rest()', function() {
    it('should return 5 when I rest 10 minus 5', function() {
      assert.equal(5, Calculator.rest(10,5));
    });
  });
});

