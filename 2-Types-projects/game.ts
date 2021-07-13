/**
 * Let's make a game 🕹
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
      // 에러가 발생하기 전에 컴파일 에러를 발생시켜서 에러가 발생하지 않도록 해준다 -> 실시간으로 에러 확인이 가능하다
      // union 타입에 "he"를 추가하게되면 "he"는 string 타입으로 default인 invalid에 할당되는 단계에서 invalid가 never 타입이기 때문에
      // 컴파일 에러가 발생한다 -> never는 최하위 타입으로 모든 타입이 할당되지 않는다 (any조차도)
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
