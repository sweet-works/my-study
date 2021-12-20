/*
 * @Autor: yaojie
 * @Date: 2021-12-20 09:57:21
 * @LastEditors: yaojie
 * @LastEditTime: 2021-12-20 10:13:48
 * @Description: 
 */
// abstract 只能继承
abstract class Animal {
  eat() {
    console.log('food');
  }
  abstract sleep(): void
}
// let animal = new Animal()
class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name;
  }
  name: string
  run() { }
  sleep() {
    console.log('dog sleep');

  }
}
let dog = new Dog('hello kat')

// dog.eat()
// dog.sleep()
class Cat extends Animal {
  constructor() {
    super()
  }
  sleep(): void {
    console.log('cat sleep')
  }
}
let cat = new Cat()
let animals: Animal[] = [dog, cat]
animals.forEach(item => {
  item.sleep()
})
// 类调用的连贯性
class WorkFlow {
  constructor() {

  }
  step1() {
    console.log('step1');
    return this;
  }
  step2() {
    console.log('step2');
    return this;
  }
}
// new WorkFlow().step1().step2()
class MyFlow extends WorkFlow {
  next() {
    console.log('next');

    return this;
  }
}
new MyFlow().step2().step1().next()