console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // this -> window
console.clear();

//
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase(); // this -> Counter

// ❣️ const, let 등의 변수는 global scope에 선언 후 this를 할당해도 window에 등록되지 않는다.
const caller = counter.increase;
caller(); // this -> undefine

// ❣️ 위를 보완하기 위해 bind 로 함수와 this 를 꽁꽁 묶어줘야한다.
const caller2 = counter.increase.bind(counter);
caller2(); // this -> Counter

// ❣️ 다른 방법으로는 this를 할당하는 함수를 () => {} 로 작성하면 된다.

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run(); // this -> Bob
