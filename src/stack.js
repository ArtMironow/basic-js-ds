const { NotImplementedError } = require('../extensions/index.js');
 
class Stack {

  constructor(){
    this.items = [];
  }
  push(elem) {
    this.items.push(elem);
  }

  pop() {
    if (this.items.length == 0)
      return undefined;
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }
}

const stack = new Stack();
 stack.push(1);
 stack.peek();
 stack.pop();
 stack.pop();
module.exports = {
  Stack
};
