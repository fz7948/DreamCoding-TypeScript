interface Stack2<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode2<T> = {
  readonly value: T;
  readonly next?: StackNode2<T>;
};

class StackImpl2<T> implements Stack2<T> {
  private _size: number = 0;
  private head?: StackNode2<T>;

  constructor(private capacity: number) {}
  public get size() {
    return this._size;
  }
  push(value: T) {
    if (this.size === this.capacity) {
      throw new Error("Stack is full!");
    }
    const node = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
    if (this.head == null) {
      throw new Error("Stack is empty!");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImpl2<string>(10);
stack.push("Ellie 1");
stack.push("Bob 2");
stack.push("Steve 3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImpl2<number>(10);
stack2.push(123);
stack2.push(456);
stack2.push(789);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
