{
  // Array
  const fruits: string[] = ["π", "π"];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: string[]) {
    // μ£Όμ΄μ§ λ°μ΄ν°λ₯Ό μΆλ ₯ν΄μ μ΄λ€κ²μ μνν  μ μμ§λ§
    // μ£Όμ΄μ§ λ°μ΄ν°λ₯Ό λ³κ²½νκ±°λ μλ°μ΄νΈ ν  μ μμ μλ μλ€
  }
  function printArray2(fruits: readonly string[]) {
    // μμ κ°μ κ²½μ° λ³κ²½λ μΈμλ₯Ό ν¨μ λ΄λΆμμ λ³κ²½νμ§ μλλ‘
    // νμμΌλ‘ λ³΄μ₯ν  μ μλ λ°©λ²μ readonlyλ₯Ό λΆμ¬μ€λ€
    // fruits.push -> error λ°μ
    // fruitsλ μ½κΈ°λ§ κ°λ₯
  }
  //   function printArray3(fruits: readonly Array<string>) {
  // μμ κ°μ κ²½μ°λ νμ©λμ§ μλλ€
  //   }

  // Tuple π -> interface, type alias, class μ¬μ© κΆμ₯
  // λ°°μ΄μ΄κΈ΄ λ°°μ΄μΈλ° μλ‘ λ€λ₯Έ νμμ ν¨κ» κ°μ§ μ μλ λ°°μ΄
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student; // μ΄λ κ² μ κ·Όνλ©΄ μ’ λ λͺνν΄μ§
  //   const [count, setCount] = useState(0) -> reactμμμ μ¬μ© μμ 
}
