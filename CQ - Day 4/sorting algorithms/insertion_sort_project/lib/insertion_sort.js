function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let min = arr[i];
    for (var j = i - 1; j >= 0; j--) {
        if (arr[j] < min) break;
        arr[j + 1] = arr[j];
    }
    arr[j + 1] = min;
  }
  return arr;
}


module.exports = {
    insertionSort
};