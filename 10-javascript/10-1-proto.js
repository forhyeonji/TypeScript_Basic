/**
 * prototype 은 oop의 상속과 비슷하다
 */

const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__); // true

const array = [];
console.log(array); // array -> Array -> Object

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;

  // Instance member level - 만들때 마다 생성됨
  // this.makeCoffee = (shots) => {
  //   console.log('making...');
  // };

  // Prototype member level
  CoffeeMachine.prototype.makeCoffee = (shots) => {
    console.log('making...');
  };
}
// machine -> CoffeeMachine -> Object
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}

// 라떼머신에 커피머신을 상속
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);
console.log(latteMachine);

// 위에서 상속을 받았기 때문에 라떼도 makeCoffee를 쓸 수 있다.
latteMachine.makeCoffee();