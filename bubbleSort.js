const BubbleSort = array => {
  const n = array.length;
  for (let i = 0; i < n; i++) {
    let isSorted = false;
    for (let j = 0; j < n - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        isSorted = true;
      }
    }
    if (!isSorted) break;
  }
  return array;
};

const array = [3, 5, 2, 1, 7, 8, 2];
console.log(BubbleSort(array));
//Hoạt động
// Duyệt mảng
//So sánh hai phần tử đứng cạnh nhau của mảng
// kiểm tra xem liệu rằng mảng có sự xáo trộn gì không
// nếu không break
