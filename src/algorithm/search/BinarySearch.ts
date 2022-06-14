function binarySearch(sortedArr: number[], target: number) {
  let mid;
  let first = 0;
  let last = sortedArr.length - 1;

  while (last - first > 1) {
    mid = Math.floor((first + last) / 2);
    if (target === sortedArr[mid]) {
      return mid;
    } else if (target < sortedArr[mid]) {
      last = mid - 1;
    } else {
      first = mid + 1;
    }
  }
  return -1;
}

console.log(binarySearch([3, 9, 9, 10, 10, 10, 27, 38, 43, 82], 10))