/**
 * @description 冒泡排序，默认是升序
 * @param {Array} arr 原始数据
 * @returns {Array} res 排完序的数据
 */
function BubbleSort(arr = []) {
  if (arr.length <= 1) return arr;

  // 记录冒泡次数
  let bubbleCount = 0;

  // 第一次，冒泡的次数
  for (let i = 0; i < arr.length; i++) {
    // 记录是否已有序
    let flag = true;
    // 比较相邻元素
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = false;
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
    bubbleCount++;

    // 已有序，退出
    if (flag) break;
  }
  console.log(`冒泡次数: ${bubbleCount}`);
  return arr;
}

console.log(BubbleSort([1]));
console.log(BubbleSort([1, 2, 3, 4, 5, 6]));
console.log(BubbleSort([4, 5, 6, 1, 2, 3]));
console.log(BubbleSort([6, 5, 4, 3, 2, 1]));
