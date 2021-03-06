{
  // JavaScript
  // old: var π
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
   * Primitive: number, string, boolean, bigint(ν° μ«μ), symbol, null, undefined
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
  // κ°μ΄ μλμ§ μλμ§ κ²°μ λμ§ μμ μν
  let name: undefined; // π
  //   name = "hello"; error
  let age: number | undefined; // π
  age = undefined;
  age = 1;
  function find(): number | undefined {
    // λ¦¬ν΄κ°μ μ€μ 
    // μ°Ύμλ€λ©΄ number μ°Ύμ§ λͺ»νλ€λ©΄ undefined
    return undefined;
  }

  // null
  // κ°μ΄ μλμ§ λͺννκ² λνλ΄μ€
  let person: null; // π
  person = null;
  //   persom = 1; error
  let person2: string | null; // π

  // unknown π
  let notSure: unknown = 0;
  // μ΄λ€ μ’λ₯μ νμμ΄ λ΄κΈΈμ§ μ μ μλ μν
  notSure = "he";
  notSure = true;

  // any π
  let anything: any = 0;
  // μ΄λ€ κ²μ΄λ λ΄μ μ μλ μν
  anything = "hello";

  // void
  // μλ¬΄κ²λ λ¦¬ν΄νμ§ μλ μν
  // μλ΅μ΄ κ°λ₯ν¨ (νμ¬λ΄ κ·μ μ λ°λ₯΄λκ² μ’λ€)
  function print(): void {
    console.log("hello");
    return;
  }
  let unusable: void = undefined; // π
  // λ³μμ κ²½μ°μλ undefinedλ°μ μ μΈν  μ μμ΄μ νμ©μ±μ΄ λ¨μ΄μ§λ€

  // never
  // μλ¬νΈλ€λ§ μμ μλ¬κ° λ°μνλ©΄ λ¦¬ν΄μ νμ§ μλ μν
  function throwError(message: string): never {
    // message -> sever (log)
    throw new Error(message); // μλ¬λ₯Ό λμ§ (1)
    //while (true) {} // κ³μ λλμ§ μλλ‘ λ§λ¬ (2)
  }
  let neverEnding: never; // π

  // object
  let obj: object; // π
  // μμ νμμ μ μΈν λͺ¨λ  object νμμ ν λΉν  μ μλ€ (λ°°μ΄λ κ°λ₯)
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ animal: "dog" });
}
