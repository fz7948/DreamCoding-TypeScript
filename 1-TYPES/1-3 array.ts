{
  // Array
  const fruits: string[] = ["🍅", "🍌"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: string[]) {
    // 주어진 데이터를 출력해서 어떤것을 수행할 순 있지만
    // 주어진 데이터를 변경하거나 업데이트 할 수 없을 수도 있다
  }
  function printArray2(fruits: readonly string[]) {
    // 위와 같은 경우 변경된 인자를 함수 내부에서 변경하지 않도록
    // 타입으로 보장할 수 있는 방법은 readonly를 붙여준다
    // fruits.push -> error 발생
    // fruits는 읽기만 가능
  }
  //   function printArray3(fruits: readonly Array<string>) {
  // 위와 같은 경우는 허용되지 않는다
  //   }

  // Tuple 👎 -> interface, type alias, class 사용 권장
  // 배열이긴 배열인데 서로 다른 타입을 함께 가질 수 있는 배열
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // 이렇게 접근하면 좀 더 명확해짐
  //   const [count, setCount] = useState(0) -> react에서의 사용 예제
}
