
class Queue {
  constructor() {
    this.inStack = [];
  }

  push(val) {
    this.inStack.push(val);
    this.outStack = [];
    for (var i = this.inStack.length - 1; i >= 0; i--) {
      this.outStack.push(this.inStack[i]);
    }
  }

  pop() {
    let returnValue = this.outStack.pop();
    this.inStack = [];
    for (var i = this.outStack.length -1; i >= 0; i--) {
      this.inStack.push(this.outStack[i]);
    }
    return returnValue;
  }
}

module.exports = Queue;