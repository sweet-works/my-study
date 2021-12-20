/*
 * @Autor: yaojie
 * @Date: 2021-12-15 17:20:45
 * @LastEditors: yaojie
 * @LastEditTime: 2021-12-16 13:09:11
 * @Description: 
 */
// 数据类型  string number undifind null Array Object Boolean function Symbol

// 原始类型

let bool: boolean = true;
let num: number = 1;
let str: string = 'hello';

//数组
let arr1: number[] = [1, 2];
let arr2: Array<number> = [3, 4];

// 元组
let tuple: [number, string] = [1, '2'];
// 可是使用push 方法向数组中添加数据 但是取数据的时候会报错  wrong: tuple.push(3) error: tuple[2]

// 函数

let add = (x: number, y: number): number => x + y;
//对象
interface Iobject {
  a: number
  b: number
}
let obj: Iobject = { a: 1, b: 2 }
// void
let noReturn = () => { }

// 枚举类型
// 数字枚举 
enum Role {
  Reporter, //0
  Develooper,//1
  Maintainer,//2 
  Owner,
  Guest
}