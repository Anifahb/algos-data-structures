function twoSum(nums, target) {
  let index = 0;

  const complements = new Map();

  while (index < nums.length) {
    const currentValue = nums[index];
    const complementValue = target - currentValue;

    if (complements.has(currentValue)) {
      return [complements.get(currentValue), index];
    }
    complements.set(complementValue, index);
    index += 1;
  }
}

function twoSumPointer(nums, target) {
  //use sorting if unsorted = O(nlog(n))
  //no additional space complexity O(1)
  //left and right pointers to transverse array O(n)
  nums.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex < rightIndex) {
    const currentSumValue = nums[leftIndex] + nums[rightIndex];

    if (currentSumValue === target) {
      return [leftIndex, rightIndex];
    }
    if (currentSumValue < target) {
      leftIndex += 1;
    } else if (currentSumValue > target) {
      rightIndex += 1;
    }
  }
}

const twoNumberSumBruteForce = (array, targetSum) => {
  // two number sum with two loops
  // 0(n)^2 time complexity
  // O(1) space complexity

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === targetSum) {
        return [array[i], array[j]];
      }
    }
  }
  return [];
};
