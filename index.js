class Queue {
  constructor() {
    this.queue = [];
    this.maxSize = 10;
  }

  enqueue(item) {
    if (this.queue.length < this.maxSize) {
      this.queue.push(item);
    } else {
      console.log("This Queue is full already");
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue.shift();
  }

  pick() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  getSize() {
    return this.queue.length;
  }

  print() {
    console.log(this.queue);
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log("Queue size:", queue.getSize());
console.log("First item:", queue.pick());
queue.dequeue();
console.log("Last item:", queue.pick());
queue.print();

class Stack {
  constructor() {
    this.stackFunction = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack.pop();
  }

  pick() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.stack[this.stack.length - 1];
  }

  isEmpty() {
    return this.stack.length === 0;
  }

  length() {
    return this.stack.length;
  }

  print() {
    console.log(this.stack);
  }
}

const stackFunction = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log("Stack size:", stack.length());
console.log("First item:", stack.pick());
stack.pop();
stack.print();
