const x = {};
const y = {};
console.log(x);
console.log(y);
console.log(x.toString());
console.log(x.__proto__ === y.__proto__);

const array = [];
console.log(array);

console.clear();

function CoffeeMachine(beans) {
  this.beans = beans;
  // Instance member level
  //   this.makeCoffee = (shots) => {
  //     console.log("making...");
  //   };
}
// Prototype member level
CoffeeMachine.prototype.makeCoffee = (shots) => {
  console.log("making...");
  return "success";
};
const machine1 = new CoffeeMachine(10);
const machine2 = new CoffeeMachine(20);
console.log(machine1);
console.log(machine2);

function LatteMachine(milk) {
  this.milk = milk;
}
LatteMachine.prototype = Object.create(CoffeeMachine.prototype);

const latteMachine = new LatteMachine(123);

console.log("?", CoffeeMachine.prototype);
console.log("1", LatteMachine.prototype);
console.log("2", latteMachine.__proto__);
console.log("3", latteMachine);
console.log(latteMachine.prototype);

let a = latteMachine.makeCoffee();
console.log("!!", a);
