var deleteDuplicates = function (head) {
  var duplicates = new Set();
  var result = new Set();

  while (head !== null) {
    var nextValue = head.val;
    var nextHead = head.next;
    if (!duplicates.has(nextValue)) {
      result.add(nextValue);
      duplicates.add(nextValue);
    } else {
      result.delete(nextValue);
    }
    head = nextHead;
  }

  var resultArray = [...result];
  var list = null;
  for (var i = resultArray.length - 1; i >= 0; i--) {
    list = { val: resultArray[i], next: list };
  }

  return list;
};
