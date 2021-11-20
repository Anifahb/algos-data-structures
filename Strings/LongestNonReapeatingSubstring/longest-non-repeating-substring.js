const lengthOfLongestSubstring = (s) => {
  //sliding window problem
  //initialize pointers

  let xPointer = 0;
  let yPointer = 0;
  let maxLength = 0;
  let characters = new Set();

  //the yPointer will always be ahead of the X pointer


  //O(n) time and space complexity for storing the set, maxlength and pointer values.
  while (yPointer < s.length) {
    const yValue = s[yPointer];

    if (!characters.has(yValue)) {
      //add character to hashSet, update maxLength and increment Pointer
      characters.add(yValue);
      maxLength = Math.max(characters.size, maxLength);
      yPointer++;
    } else {
      //remove first character from sliding window
      //increment first Pointer
      characters.delete(s[xPointer]);
      xPointer++;
    }
  }

  return maxLength;
};
