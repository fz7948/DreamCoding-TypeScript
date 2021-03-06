/**
 * Let's make a game ๐น
 */
type Direction2 = "up" | "down" | "left" | "right";
const position = { x: 0, y: 0 };
function move2(direction: Direction2) {
  switch (direction) {
    case "up":
      position.y += 1;
      break;
    case "down":
      position.y -= 1;
      break;
    case "left":
      position.x -= 1;
      break;
    case "right":
      position.x += 1;
      break;
    default:
      const invalid: never = direction;
      // ์๋ฌ๊ฐ ๋ฐ์ํ๊ธฐ ์ ์ ์ปดํ์ผ ์๋ฌ๋ฅผ ๋ฐ์์์ผ์ ์๋ฌ๊ฐ ๋ฐ์ํ์ง ์๋๋ก ํด์ค๋ค -> ์ค์๊ฐ์ผ๋ก ์๋ฌ ํ์ธ์ด ๊ฐ๋ฅํ๋ค
      // union ํ์์ "he"๋ฅผ ์ถ๊ฐํ๊ฒ๋๋ฉด "he"๋ string ํ์์ผ๋ก default์ธ invalid์ ํ ๋น๋๋ ๋จ๊ณ์์ invalid๊ฐ never ํ์์ด๊ธฐ ๋๋ฌธ์
      // ์ปดํ์ผ ์๋ฌ๊ฐ ๋ฐ์ํ๋ค -> never๋ ์ตํ์ ํ์์ผ๋ก ๋ชจ๋  ํ์์ด ํ ๋น๋์ง ์๋๋ค (any์กฐ์ฐจ๋)
      throw Error(`unknown direction: ${invalid}`);
  }
}
console.log(position); // { x: 0, y: 0}
move2("up");
console.log(position); // { x: 0, y: 1}
move2("down");
console.log(position); // { x: 0, y: 0}
move2("left");
console.log(position); // { x: -1, y: 0}
move2("right");
console.log(position); // { x: 0, y: 0}
