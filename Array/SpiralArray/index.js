var spiralOrder = function (matrix) {
  const spiralResult = [];

  if (matrix.length === 0) return spiralResult;
  //layer by layer solution
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  let beginColumn = 0;
  let endColumn = matrix[0].length - 1;

  //time complexity O(n) since we iterate through and print the solution
  //no additional space complexity for computation


  while (rowBegin <= rowEnd && beginColumn <= endColumn) {
    //transverse right
    for (let i = beginColumn; i <= endColumn; i++) {
      spiralResult.push(matrix[rowBegin][i]);
    }
    //move down next row
    rowBegin++;

    //transverse down
    for (let i = rowBegin; i <= rowEnd; i++) {
      spiralResult.push(matrix[i][endColumn]);
    }

    //move left to previous column
    endColumn--;

    if (rowBegin <= rowEnd) {
      //transverse left
      for (let i = endColumn; i >= beginColumn; i--) {
        spiralResult.push(matrix[rowEnd][i]);
      }
      //move up one row
      rowEnd--;
    }

    if (beginColumn <= endColumn) {
      //trasverse up
      for (let i = rowEnd; i >= rowBegin; i--) {
        spiralResult.push(matrix[i][beginColumn]);
      }
      //move right to next column
      beginColumn++;
    }
  }

  return spiralResult;
};
