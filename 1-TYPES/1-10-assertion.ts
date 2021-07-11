{
  /**
   * Type Assertions 👎
   */
  // 타입을 확인할 때, 타입을 강요
  // 타입이 없는 자바스크립트와 연동되는 경우가 있기때문에 불가피하게 써야하는 경우들이 있다
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // result.length
  // 타입스크립트는 any이기 때문에 자바스크립트에서 이용가능한 API를 이용할 수 없다
  // console.log((result as string).length);
  // console.log((<string>result).length)
  // -> string으로 assertion 해줬는데 number가 return 된다면 undefined 출력
  // 정말 정말 100% 타입을 장담할 수 있을때 사용해야됨

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 👎
  // TypeError: wrong.push is not a function

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // const numbers = findNumbers()! -> 숫자 배열만 받을거야!
  numbers!.push(2);
  // numbers가 배열 또는 undefined라 push가 권장되지 않지만
  // !를 사용하면 push를 사용가능하다 (100% 타입에 대한 확신이 있을경우 사용)

  const button = document.querySelector("class");
  // 요소가 있을수도 있고 없을수도 있다
  // button.nodeValue;
  // button은 null일 수도 있다
  if (button) {
    button.nodeValue;
  }
  // 정말 정말 있는걸 장담할 수 있다면
  // const button = document.querySelector("class")!;
}
