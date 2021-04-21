var assert = require('assert');
var Calculator = require('../../lib/calculator.js');

describe('Calculator', function() {
  describe('division()', function() {
    it('should return 5 when I divide 10 plus 2', function() {
      assert.equal(5, Calculator.divide(10,2));
    });

    it('should return 0 when I divide 0 divide 0', function() {
        assert.equal(0, Calculator.divide(0,0));
    });
    
  });
});

