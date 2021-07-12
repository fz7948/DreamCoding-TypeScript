interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): string;
}

type StackNode = {
  // readonly는 한번 만들어지면 다시 값이 변경되지 않음 -> 불변성
  readonly value: string;
  readonly next?: StackNode;
};

class StackImpl implements Stack {
  private _size: number = 0;
  private head?: StackNode;

  constructor(private capacity: number) {
    // 처음 스택을 만들때 스택의 사이즈를 제한 걸어둔다
  }
  public get size() {
    // setter가 없으면 외부에선 정보를 바꿀수 없다
    return this._size;
  }
  // size는 readonly로 외부에서 정보를 변경할 수 없다
  // 그렇다고 여기서도 readonly를 앞에 걸면 내부에서도 size 정보를 변경할 수 없다
  push(value: string) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    // null == undefined, null !== undefined
    if (this.head == null) {
      // 타입스크립트의 코드는 strict null check라는 옵션을 통해 엄격하게 코딩을 할 수 있도록 만들어 두었지만
      // 자바스크립트와 연동하려면 변수에 null 또는 undefined를 할당 받을 수 있다
      // head가 null이거나 undefined인 경우라면 헤드가 만약 null이라면 strict null check하게되면 undefined인 경우는 통과가 되기때문에
      // 실시간 에러가 발생 할 수 있다
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");

while (stack.size !== 0) {
  console.log(stack.pop());
}
