const InsertionSort = array => {
  const n = array.length;
  for (let i = 1; i < n; i++) {
    let current = array[i]; // 2
    let j = i - 1; // 1
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
};

const array = [3, 5, 2, 1, 7, 8, 2];
console.log(InsertionSort(array));

// Mục đích so sánh số bên trái của nó nếu số bên trái lớn hơn số bến trái sẽ dịch sang phải vài ghi đè
