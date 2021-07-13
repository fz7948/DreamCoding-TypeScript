interface Employee {
  pay(): void;
}

class FullTimeEmplotee implements Employee {
  pay() {
    console.log(`full time!`);
  }
  wokeFullTime() {}
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time!`);
  }
  workPartTime() {}
}

// 세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 Bad!!
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
}

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FullTimeEmplotee();
const bob = new PartTimeEmployee();
// ellie.wokeFullTime();
// bob.workPartTime();

const ellieAfterPay2 = payBad(ellie);
// const bobAgterPay = payBad(bob);
const ellieAfterPay = pay(ellie);
// const bobAgterPay = pay(bob);

console.log(ellieAfterPay);
console.log(ellieAfterPay2);

const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "cat",
};

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // cat
