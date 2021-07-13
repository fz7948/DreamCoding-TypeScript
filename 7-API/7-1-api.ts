Array;
// 커멘드 누르고 위에 클릭하면 API를 볼 수 있다
[1, 2].map;

type Student = {
  passed: boolean;
};
const students: Student[] = [
  { passed: true },
  { passed: true },
  { passed: false },
];
const result = students.every((student) => {
  return student.passed;
});
// 모든 학생들이 한번이라도 false가 나오면 every는 false
// console.log(result);

class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}
class Dog extends Animal {
  isDog: boolean = false;
}
const animals: Animal[] = [new Cat(), new Cat(), new Dog()];
function isCat(animal: Animal): animal is Cat {
  //   console.log((animal as Cat).isCat);
  return (animal as Cat).isCat !== undefined;
}

console.log(isCat(new Cat()));
console.log(new Cat());
console.log(isCat(new Dog()));
// console.log(animals.every<Cat>(isCat));
