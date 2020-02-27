
const findClosestValueInBst = require('./ClosestValueInBst');
const assert = require('assert');



class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left === null) {
        this.left = new BST(value);
      } else {
        this.left.insert(value);
      }
    } else {
      if (this.right === null) {
        this.right = new BST(value);
      } else {
        this.right.insert(value);
      }
    }
    return this;
  }
}

const test = new BST(100)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(1)
  .insert(22)
  .insert(1)
  .insert(1)
  .insert(3)
  .insert(1)
  .insert(1)
  .insert(502)
  .insert(55000)
  .insert(204)
  .insert(205)
  .insert(207)
  .insert(206)
  .insert(208)
  .insert(203)
  .insert(-51)
  .insert(-403)
  .insert(1001)
  .insert(57)
  .insert(60)
  .insert(4500);

describe('Binary Search Tree', function(){
    describe('Closest Value', function(){
        it('return target when it exists in bst', function (){

            assert.equal(findClosestValueInBst(test,100), 100);
            assert.equal(findClosestValueInBst(test,208), 208);
            assert.equal(findClosestValueInBst(test,4500), 4500);
        })
    })

})
describe('Binary Search Tree', function(){
    describe('Closest Value', function(){
        it('return  closest value less or greater than target in bst', function (){

            assert.equal(findClosestValueInBst(test,4501), 4500);
            assert.equal(findClosestValueInBst(test,-70), -51);
            assert.equal(findClosestValueInBst(test, 2000), 1001);
            assert.equal(findClosestValueInBst(test, 6), 5);
            assert.equal(findClosestValueInBst(test, -1), 1);
        })
    })

})


