/**
 * @description 插入排序，默认是升序
 * @param {Array} arr 原始数据
 * @returns {Array} res 排完序的数据
 */
function insertSort(arr = []) {
  if (arr.length <= 1) return arr;

  // 移动的次数
  let moveCount = 0;
  for (let i = 1; i < arr.length; i++) {
    // 待排序区间的元素
    let nextVal = arr[i];

    // 已排序区间长度
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > nextVal) {
        moveCount++;
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = nextVal;
  }
  console.log(`移动的次数: ${moveCount}`);
  return arr;
}


console.log(insertSort([1]));
console.log(insertSort([1, 2, 3, 4, 5, 6]));
console.log(insertSort([4, 5, 6, 1, 2, 3]));
console.log(insertSort([6, 5, 4, 3, 2, 1]));
