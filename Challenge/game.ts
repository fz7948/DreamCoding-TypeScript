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
      throw Error(`unknown direction: ${direction}`);
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
