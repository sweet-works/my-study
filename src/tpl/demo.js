/*
 * @Autor: yaojie
 * @Date: 2021-12-17 09:37:33
 * @LastEditors: yaojie
 * @LastEditTime: 2021-12-17 11:52:45
 * @Description:  排序算法
 */
// 冒泡排序
let arrs = [2, 3, 1, 3, 5, 6, 7, 10, 0];
let index = 0

function maiopao (arr) {
  for (let i = 0; i < arr.length; ++i) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      index++
    }
  }
  return arr;
}
function bubbleSort (arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
      console.log(arr, index);
      index++;
    }
  }
  return arr;
}
console.log(maiopao(arrs));
// console.log(bubbleSort(arrs));
console.log(index);
// 数组
// 链表 -》单链表 双链表 循环链表 静态链表？ 数组实现链表
// 队列
// 栈结构
// 二叉树
// 红黑树
// 四叉树
// 八叉树
// 图结构
// 哈希 