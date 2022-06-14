// [38, 27, 43, 3, 9, 82, 10]
// Dividing
// 1. [38, 27, 42, 3] [9 ,82, 10]
// 2. [38, 27] [42, 3] | [9 ,82] [10]
// 3. [38][27]  [42][3] | [9][82]  [10]
// Merging
//  [27, 38] [3, 42] | [9, 82] [10]
//  [3, 27, 38, 42] | [9, 10, 82]
// ...

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1){
    return arr;
  }

  let mid = Math.floor(arr.length / 2);

  return merge(
    mergeSort (arr.slice(0, mid)),
    mergeSort (arr.slice(mid))
  )
}

function merge(left: number[], right: number[]) {
  let mergeArr = [];
  let i = 0, j = 0;

  while(i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      mergeArr.push(left[i])
      i++;
    } else {
      mergeArr.push(right[j])
      j++;
    }
  }

  // concat remaining values of left or right
  return mergeArr.concat(left.slice(i)).concat(right.slice(j));
}

console.log(mergeSort([38, 27, 10, 43, 3, 9, 82, 10]))