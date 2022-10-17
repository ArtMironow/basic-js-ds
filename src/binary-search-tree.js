const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    if(data === undefined || data === null) {return}
    var newNode = new Node(data);
      if(this.rootNode === null)
        this.rootNode = newNode;
      else
        this.insertNode(this.rootNode, newNode);
  }

  insertNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null)
        node.left = newNode;
      else
        this.insertNode(node.left, newNode);
    }
    else {
      if(node.right === null)
        node.right = newNode;
      else
        this.insertNode(node.right, newNode);
    }
  }

  has(data) {
    if(data === undefined || data === null) {return false;}
    let currNode = this.rootNode;
    while(currNode !== null) {
      if(currNode.data === data) {
         return true;
      } else if(data < currNode.data) {
         currNode = currNode.left;
      } else {
         currNode = currNode.right;
      }
   }
   return false;
  }

  find(data) {
    if(!this.rootNode) return false;
    let current = this.rootNode;
    let found = false;
    while(current && !found) {
      if(data < current.data)
          current = current.left;
      else if(data > current.data)
          current = current.right;
      else
          found = current;
    }
    if(!found) return null;
    return found;
  }

  remove(data) {
    if(data === undefined || data === null) {return}
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) return null;
    else if(data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }
    else if(data > node.data){
      node.right = this.removeNode(node.right, data);
      return node;
    }
    else {
      if(node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if(node.left === null) {
        node = node.right;
        return node;
      }
      else if(node.right === null) {
        node = node.left;
        return node;
      }
        var tmp = this.smallestNode(node.right);
        node.data = tmp.data;
        node.right = this.removeNode(node.right, tmp.data);
        return node;
    }
  }

  smallestNode(node){
    if(node.left === null)
        return node;
    else
        return this.smallestNode(node.left);
  }

  min() {
    if(!this.rootNode) return null;
    let current = this.rootNode;
    if(current.left === null)
      return current.data;
    else{
      while(current.left !== null){
        current = current.left;
      }
    }
    return current.data;
  }

  max() {
    if(!this.rootNode) return null;
    let current = this.rootNode;
    if(current.right === null)
      return current.data;
    else {
      while(current.right !== null)
        current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};