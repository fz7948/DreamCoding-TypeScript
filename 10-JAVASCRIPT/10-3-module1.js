export default function add(a, b) {
  return a + b;
}

// 모듈화를 하지 않으면 global 스코프로 인식

// 모듈화를 하지 않으면 이름 충돌이나 실행 순서 등 예상하지 못하는 경우가 생길 수 있어서
// 모듈화를 해주는것이 좋음

export function print() {
  console.log("print");
}
