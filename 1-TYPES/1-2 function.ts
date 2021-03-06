{
  // JavaScript ๐
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ๐
  function add(num1: number, num2: number): number {
    //number, number๋ฅผ ๋ฐ์์ number๋ฅผ ๋ฆฌํด
    return num1 + num2;
  }

  // JavaScript ๐
  function jsFetchNum(id) {
    // code ...
    // code ...
    // code ...
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript ๐
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
  //   printName("Ellie"); error ์ ํํ ์ ํด์ง ์ธ์ ๊ฐฏ์๋ก ์ ๋ฌํด์ผ๋จ

  function printName2(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }
  // lastName์ ์ ๋ฌํด๋ ๋๊ณ  ์ ๋ฌํ์ง ์์๋ ๋จ
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
