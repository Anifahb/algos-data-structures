
const BST = require('./BstConstruction');
const assert = require('assert');



const test1 = new BST(10)
  .insert(5)
  .insert(15)
  .insert(5)
  .insert(2)
  .insert(14)
  .insert(22);

const test2 = new BST(10)
  .insert(15)
  .insert(11)
  .insert(22)
  .remove(10);

const test3 = new BST(10)
  .insert(5)
  .insert(7)
  .insert(2)
  .remove(10);

const test4 = new BST (10)
  .insert(5)
  .insert(15)
  .insert(22)
  .insert(17)
  .insert(34)
  .insert(7)
  .insert(2)
  .insert(5)
  .insert(1)
  .insert(35)
  .insert(27)
  .insert(16)
  .insert(30)
  .remove(22)
  .remove(17);

function inOrderTraverse(tree, array) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }
  return array;
}

describe('Binary Search Tree', function () {
  describe('Insertion Method', function () {
    it('Test Case #1', function () {
      assert.deepEqual(test1.left.value, 5);
    });
    it('Test Case #2', function () {
      assert.deepEqual(test1.right.right.value, 22);
    });
    it('Test Case #3', function () {
      assert.deepEqual(test1.right.left.value, 14);
    });
    it('Test Case #4', function () {
      assert.deepEqual(test1.left.right.value, 5);
    });
    it('Test Case #5', function () {
      assert.deepEqual(test1.left.left.value, 2);
    });
    it('Test Case #6', function () {
      assert.deepEqual(test1.left.left.left, null);
    });
    it('Test Case #7', function () {
      assert.deepEqual(test1.right.left.right, null);
    });
});
describe('Contains Method', function () {
  it('Test Case #8', function () {
    assert.deepEqual(test1.contains(15), true);
  });
  it('Test Case #9', function () {
    assert.deepEqual(test1.contains(2), true);
  });
  it('Test Case #10', function () {
    assert.deepEqual(test1.contains(10), true);
  });
  it('Test Case #11', function () {
    assert.deepEqual(test1.contains(22), true);
  });
  it('Test Case #12', function () {
    assert.deepEqual(test1.contains(23), false);
  });

});
describe('Remove Method', function () {
  it('Test Case #13', function () {
    assert.deepEqual(inOrderTraverse(test2, []), [11, 15, 22]);
  });
  it('Test Case #14', function () {
    assert.deepEqual(inOrderTraverse(test3, []),[2, 5, 7]);
  });
  it('Test Case #15', function () {
    assert.deepEqual(inOrderTraverse(test4, []),[1, 2, 5, 5, 7, 10, 15, 16, 27, 30, 34, 35]);
  });
  it('Test Case #16', function () {
    assert.deepEqual(test4.right.right.value, 27);
  });
  it('Test Case #17', function () {
    assert.deepEqual(test4.right.right.left.value, 16);
  });

});
});

