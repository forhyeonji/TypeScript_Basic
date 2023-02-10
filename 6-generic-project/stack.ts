{
  /**
   * stack 구현
   */
  interface Stack<T> {
    readonly size: number;
    push(value: T): void;
    pop(): T;
  }

  type StackNode<T> = {
    readonly value: T;
    readonly next?: StackNode<T>;
  };

  class StackImpl<T> implements Stack<T> {
    private _size: number = 0;
    private head?: StackNode<T>;
    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}
    push(value: T): void {
      if (this.size === this.capacity) {
        throw new Error('Stack is full!');
      }
      const node = {
        value,
        next: this.head,
      };
      this.head = node;
      this._size++;
    }

    pop(): T {
      // null == undefined 엄격한 체크하면 안 됨
      if (this.head == null) {
        throw new Error('Stack is empty!');
      }
      const node = this.head; // 제거하고자 하는 node
      this.head = node.next;
      this._size--;
      return node.value;
    }
  }

  const stack = new StackImpl<number>(10);
  stack.push(5);
  stack.push(3);
  stack.push(2);
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
