const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

function removeKFromList(l, k) {
  if(l === null){
    return l;
  }
  while(l.value === k){
    l = l.next;
  }
  let thisNode = l;
  let nextNode = thisNode.next;
  while(nextNode !== null){
    if(nextNode.value === k){
      thisNode.next = nextNode.next;
      if(thisNode.next === null)
        break;
    }
    thisNode = thisNode.next;
    nextNode = thisNode.next;       
  }
  return l;
}

module.exports = {
  removeKFromList
};
