class Queue {
  constructor() {
    this.data = [];
  }
  // add element to the queue
  enqueue(element) {
    this.data.push(element);
  }
  // remove element from the queue
  dequeue() {
    if (this.data.length > 0) {
      return this.data.shift();
    }
  }
  // view the last element
  peek() {
    return this.data[this.data.length - 1];
  }
  // view the First element
  peekFirst() {
    return this.data[0];
  }
  // check if the queue is empty
  isEmpty() {
    return this.data.length === 0;
  }
  // empty the queue
  clear() {
    return (this.data = []);
  }
  getlength() {
    return this.data.length;
  }
}
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.dequeue(); // 1
// queue.clear();
console.log(queue); // Queue { data: [ 2, 3 ] }
console.log(queue.data); // [ 2, 3 ]
console.log(queue.peek()); // 3
console.log(queue.peekFirst()); // 2
console.log(queue.isEmpty()); // false
console.log(queue.getlength()); // 2


/* 
class Queue {
  constructor() {
    this.data = [];
    this.rear = 0;
    this.size = 10;
  }

  enqueue(element) {
    this.data[this.rear] = element;
    this.rear = this.rear + 1;
  }

  enqueue(element) {
    if (this.rear < this.size) {
      this.data[this.rear] = element;
      this.rear = this.rear + 1;
    }
  }

  length() {
    return this.rear;
  }
}

*/