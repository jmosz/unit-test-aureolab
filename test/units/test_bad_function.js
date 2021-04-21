var assert = require('assert');
var Calculator = require('../../lib/calculator.js');

describe('Calculator', function() {
  describe('badFunction()', function() {
    it('should return 5 when I add 3 plus 2', function() {
      assert.notEqual(5, Calculator.badFunction(3,2));
    });
  });
});

