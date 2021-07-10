{
  // JavaScript
  // old: var 👎
  //   var age = 5;
  //   age = 1;

  // let es6
  let name = "hello";
  name = "hi";

  // const
  const age = 5;
  //   age = 5;  error
}

{
  /**
   * JavaScript
   * Primitive: number, string, boolean, bigint(큰 숫자), symbol, null, undefined
   * Object: funtion, arrat ...
   */

  // number
  //   const num: number = "d";  error
  //   const num: number = 0;

  // string
  const str: string = "hello";

  // boolean
  const boal: boolean = false;

  // undefined
  // 값이 있는지 없는지 결정되지 않은 상태
  let name: undefined; // 👎
  //   name = "hello"; error
  let age: number | undefined; // 👍
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // 리턴값을 설정
    // 찾았다면 number 찾지 못했다면 undefined
    return undefined;
  }

  // null
  // 값이 없는지 명확하게 나타내줌
  let person: null; // 👎
  person = null;
  //   persom = 1; error
  let person2: string | null; // 👍

  // unknown 👎
  let notSure: unknown = 0;
  // 어떤 종류의 타입이 담길지 알 수 없는 상태
  notSure = "he";
  notSure = true;

  // any 👎
  let anything: any = 0;
  // 어떤 것이던 담을 수 있는 상태
  anything = "hello";

  // void
  // 아무것도 리턴하지 않는 상태
  // 생략이 가능함 (회사내 규정에 따르는게 좋다)
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // 👎
  // 변수의 경우에는 undefined밖에 선언할 수 없어서 활용성이 떨어진다

  // never
  // 에러핸들링 시에 에러가 발생하면 리턴을 하지 않는 상태
  function throwError(message: string): never {
    // message -> sever (log)
    throw new Error(message); // 에러를 던짐 (1)
    //while (true) {} // 계속 끝나지 않도록 만듬 (2)
  }
  let neverEnding: never; // 👎

  // object
  let obj: object; // 👎
  // 원시 타입을 제외한 모든 object 타입을 할당할 수 있다 (배열도 가능)
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
