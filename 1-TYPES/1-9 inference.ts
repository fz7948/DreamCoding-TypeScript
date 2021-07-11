{
  /**
   * Type Inference
   */
  let text = "hello";
  text = "hi";
  //   text = 1 -> error
  function print(message) {
    console.log(message);
  }
  print("hello");
  print(1);
  // 타입을 따로 명시하지않으면 함수 인자에 any라는 값이 할당이 되어진다
  function print2(message: "hello") {
    console.log(message);
  }
  print2("hello");
  //   print2(1) -> error

  function add2(x: number, y: number) {
    return x + y;
  }
  // return되는 값도 number로 자동 할당
  const result = add2(1, 2);
  // result도 number 타입으로 자동 지정

  // 타입 추론 정말 좋은걸까?
  // -> No !!
}
