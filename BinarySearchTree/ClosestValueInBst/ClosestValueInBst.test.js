const findClosestValueInBst = require('./ClosestValueInBst');
const BST = require('../BstConstruction/BstConstruction');
const assert = require('assert');

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

describe('Binary Search Tree', function () {
  describe('Closest Value', function () {
    it('Test #1', function () {
      assert.deepEqual(findClosestValueInBst(test, 100), 100);
    })
    it('Test #2', function () {
      assert.deepEqual(findClosestValueInBst(test, 208), 208);   
    })
    it('Test #3', function () {
      assert.deepEqual(findClosestValueInBst(test, 4500), 4500);
    })
    it('Test #4', function () {
      assert.deepEqual(findClosestValueInBst(test, 4501), 4500);
    })
    it('Test #5', function () {
      assert.deepEqual(findClosestValueInBst(test, -70), -51);
    })
    it('Test #6', function () {
      assert.deepEqual(findClosestValueInBst(test, 2000), 1001);
    })
    it('Test #7', function () {
      assert.deepEqual(findClosestValueInBst(test, 6), 5);
    })
    it('Test #8', function () {
      assert.deepEqual(findClosestValueInBst(test, -1), 1);
    })
  })

})
