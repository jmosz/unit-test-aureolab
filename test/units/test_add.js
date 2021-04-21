var assert = require('assert');
var Calculator = require('../../lib/calculator.js');

describe('Calculator', function() {
  describe('add()', function() {
    it('should return 5 when I add 2 plus 3', function() {
      assert.equal(5, Calculator.add(2,3));
    });

    it('should return 0 when I add 0 plus 0', function() {
      assert.equal(0, Calculator.add(0,0));
    });

    it('should return 10 when I add 5 plus 5', function() {
      assert.equal(10, Calculator.add("5","5"));
    });

    it('should return 10 when I add 2 plus 5', function() {
      assert.notEqual(10, Calculator.add("2","5"));
    });

    it('should return 10.5 when I add 5 plus 5.5', function() {
      assert.equal(10.5, Calculator.add("5","5.5"));
    });
  });

});
