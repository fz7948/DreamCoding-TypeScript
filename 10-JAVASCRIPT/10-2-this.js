console.log(this);

function simpleFunc() {
  console.log(this);
}

window.simpleFunc();
console.clear();

class Counter {
  count = 0;
  increase = function () {
    console.log("?", this);
  };
}

class Counter2 {
  count = 0;
  increase = () => {
    // 에로우 함수는 선언될 당시에 스코프를 유지
    // 이 안에서 this는 Counter2를 유지한다는걸 기억
    console.log("?", this);
  };
}

const counter = new Counter();
counter.increase();

const caller = counter.increase;
caller(); // undefined

const caller2 = counter.increase.bind(counter);
caller2();

function helloWorld() {
  console.log("hello");
}

window.helloWorld();
// 함수를 정의하면 바로 윈도우에서 접근이 가능

const ellie = "ellie";

let bob = "bob";

window.ellie; // x
window.bob; // x

// 함수는 글로벌 객체에서도 이용이 가능하지만 변수는 글로벌 객체 안에 등록이 되지 x
// var 키워드는 윈도우에 등록이 됨

class Bob {}

const pob = new Bob();
pob.run = counter.increase;
pob.run(); // Bob 클래스 호출 -> run이라는 함수를 pob이 불렀기 때문
