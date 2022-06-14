// [38, 27, 43, 3, 9, 82, 10]

// First iteration
// [27, 38, 43, 3, 9, 82, 10]
// [27, 38, 43, 3, 9, 82, 10]
// [27, 38, 3, 43, 9, 82, 10]
// [27, 38, 3, 9, 43, 82, 10]
// [27, 38, 3, 9, 43, 82, 10]
// [27, 38, 3, 9, 10, 82, 43]
//...
function bubbleSort(arr: number[]) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        if (swapped == false) {
            break
        }
    }
    return arr;
}

console.log(bubbleSort([38, 10, 27, 43, 3, 9, 82, 10]))