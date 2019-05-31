var assert = require("chai").assert;
var poppinBottles = require("../poppin-bottles");

var test1 = 10;
var test2 = 20;
var test3 = 30;
var test4 = 40;

describe("checking expected values", function() {
  it ('should return 15', function(){
    assert.equal(poppinBottles.totalBottles(test1), 15);
  })
  it ('should return 35', function(){
    assert.equal(poppinBottles.totalBottles(test2), 35);
  })
  it ('should return 55', function(){
    assert.equal(poppinBottles.totalBottles(test3), 55);
  })
  it ('should return 75', function(){
    assert.equal(poppinBottles.totalBottles(test4), 75);
  })
})