const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');
 
class Queue {
  
  constructor(){
    this.elements = {};
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);
    if(this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    }
    else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    let newNode;
    if(this.head !== null){
      newNode = this.head.value;
      this.head = this.head.next;
    }
    return newNode;
  }
}

const queue = new Queue(); 
queue.enqueue(1);
queue.enqueue(3);
queue.dequeue();
queue.getUnderlyingList();

module.exports = {
  Queue
};
