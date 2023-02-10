{
  /**
   * stack 구현
   */
  interface Stack {
    readonly size: number;
    push(value: string): void;
    pop(): string;
  }

  type StackNode = {
    readonly value: string;
    readonly next?: StackNode;
  };

  class StackImpl implements Stack {
    private _size: number = 0;
    private head?: StackNode;
    get size() {
      return this._size;
    }

    constructor(private capacity: number) {}
    push(value: string): void {
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

    pop(): string {
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

  const stack = new StackImpl(10);
  stack.push('hyeonji 1');
  stack.push('kips 2');
  stack.push('park 3');
  while (stack.size !== 0) {
    console.log(stack.pop());
  }
}
