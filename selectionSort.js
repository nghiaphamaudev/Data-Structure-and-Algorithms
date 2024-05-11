const SelectionSort = array => {
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (array[minIndex] > array[j]) minIndex = j;
    }
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
};

const InsertionSort = array => {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i];
    let j = i - 1;
    if (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

const array = [5, 3, 2, 7, 8, 1, 2];
// 3 5 2 7 8 1 2
//
console.log(SelectionSort(array));
console.log(InsertionSort(array));
