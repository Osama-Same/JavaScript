class Stact {
  constructor() {
    this.data = [];
  }
  push(element) {
    this.data.push(element);
  }
  pop() {
    this.data.pop();
  }
  getSize() {
    return this.data.length;
  }
  isEmpty() {
    return this.getSize === 0;
  }
  // Last Index
  peekLast() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[this.data.length - 1];
  }
  peekFirst() {
    return this.data[0];
  }
}
const stack = new Stact();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(); // 2
console.log(stack); // Stact { data: [ 1, 2 ] }
console.log(stack.data); // [1,2]
console.log(stack.getSize()); // 2
console.log(stack.isEmpty()); // false
console.log(stack.peekLast()); // 2
console.log(stack.peekFirst()); // 1


/* class Stack {
  constructor() {
    this.data = [];
    this.top = 0;
  }

  push(value) {
    this.data[this.top] = element;
    this.top = this.top + 1;
  }

  pop() {
    if (this.isEmpty() === false) {
      this.top = this.top - 1;
      return this.data.pop();
    }
  }

  isEmpty() {
    return this.top === 0;
  }
} */