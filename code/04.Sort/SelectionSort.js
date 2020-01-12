/**
 * @description 选择排序，默认是升序
 * @param {Array} arr 原始数据
 * @returns {Array} res 排完序的数据
 */
function selectionSort(arr = []) {
  if (arr.length <= 1) return arr;
  // 比较的次数
  let compareCount = 0;

  for (let i = 0; i < arr.length; i++) {
    let minVal = arr[i];
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minVal = arr[j];
        minIndex = j;
        compareCount++;
      }
    }

    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  console.log(`比较的次数: ${compareCount}`);
  return arr;
}

console.log(selectionSort([1]));
console.log(selectionSort([1, 2, 3, 4, 5, 6]));
console.log(selectionSort([4, 5, 6, 1, 2, 3]));
console.log(selectionSort([6, 5, 4, 3, 2, 1]));
