{
  /**
   * Type Assertions ๐
   */
  // ํ์์ ํ์ธํ  ๋, ํ์์ ๊ฐ์
  // ํ์์ด ์๋ ์๋ฐ์คํฌ๋ฆฝํธ์ ์ฐ๋๋๋ ๊ฒฝ์ฐ๊ฐ ์๊ธฐ๋๋ฌธ์ ๋ถ๊ฐํผํ๊ฒ ์จ์ผํ๋ ๊ฒฝ์ฐ๋ค์ด ์๋ค
  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();
  // result.length
  // ํ์์คํฌ๋ฆฝํธ๋ any์ด๊ธฐ ๋๋ฌธ์ ์๋ฐ์คํฌ๋ฆฝํธ์์ ์ด์ฉ๊ฐ๋ฅํ API๋ฅผ ์ด์ฉํ  ์ ์๋ค
  // console.log((result as string).length);
  // console.log((<string>result).length)
  // -> string์ผ๋ก assertion ํด์คฌ๋๋ฐ number๊ฐ return ๋๋ค๋ฉด undefined ์ถ๋ ฅ
  // ์ ๋ง ์ ๋ง 100% ํ์์ ์ฅ๋ดํ  ์ ์์๋ ์ฌ์ฉํด์ผ๋จ

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ๐
  // TypeError: wrong.push is not a function

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  // const numbers = findNumbers()! -> ์ซ์ ๋ฐฐ์ด๋ง ๋ฐ์๊ฑฐ์ผ!
  numbers!.push(2);
  // numbers๊ฐ ๋ฐฐ์ด ๋๋ undefined๋ผ push๊ฐ ๊ถ์ฅ๋์ง ์์ง๋ง
  // !๋ฅผ ์ฌ์ฉํ๋ฉด push๋ฅผ ์ฌ์ฉ๊ฐ๋ฅํ๋ค (100% ํ์์ ๋ํ ํ์ ์ด ์์๊ฒฝ์ฐ ์ฌ์ฉ)

  const button = document.querySelector("class");
  // ์์๊ฐ ์์์๋ ์๊ณ  ์์์๋ ์๋ค
  // button.nodeValue;
  // button์ null์ผ ์๋ ์๋ค
  if (button) {
    button.nodeValue;
  }
  // ์ ๋ง ์ ๋ง ์๋๊ฑธ ์ฅ๋ดํ  ์ ์๋ค๋ฉด
  // const button = document.querySelector("class")!;
}
