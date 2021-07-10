{
  // JavaScript 👎
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 👍
  function add(num1: number, num2: number): number {
    //number, number를 받아서 number를 리턴
    return num1 + num2;
  }

  // JavaScript 👎
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 👍
  function fetchNum(id: string): Promise<number> {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // JavaScript => TypeScript
  // Optional patameter
  function printName(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }
  printName("Steve", "Jobs");
  printName("Anna", undefined);
  //   printName("Ellie"); error 정확히 정해진 인자 갯수로 전달해야됨

  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  // lastName은 전달해도 되고 전달하지 않아도 됨
  printName2("Steve", "Jobs");
  printName2("Ellie");
  printName2("Anna", undefined);

  // Defalut parameter
  function printMessage(message: string = "defalt message") {
    console.log(message);
  }
  printMessage();
}

// Rest parameter
function addNumbers(...numbers: number[]): number {
  return numbers.reduce((a, b) => a + b);
}
console.log(addNumbers(1, 2));
console.log(addNumbers(1, 2, 3, 4));
console.log(addNumbers(1, 2, 3, 4, 5, 6));
