var fizzbuzz = require('../lib/fizzbuzz');
var assert = require('assert');

describe('Test fizzbuzz', function () {
  it('should return 1', function () {
    assert(fizzbuzz(1) == 1);
  });
  
  it('should return Fizz', function () {
    assert(fizzbuzz(3) == 'Fizz');
  });
  
  it('should return Buzz', function () {
    assert(fizzbuzz(5) == 'Buzz');
  });
  
  it('should return FizzBuzz', function () {
    assert(fizzbuzz(15) == 'FizzBuzz');
  });
});