const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;
    
    while (current) {
      if (data < current.data) {
        if (current.left === null) {
          current.left = new Node(data);
          return;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = new Node(data);
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) return current;
      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  has(data) {
    return !!this.find(data);
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, value) {
      if (!node) return null;

      if (value < node.data) {
        node.left = removeNode(node.left, value);
        return node;
      }

      if (value > node.data) {
        node.right = removeNode(node.right, value);
        return node;
      }

      if (!node.left && !node.right) return null; 
      if (!node.left) return node.right;         
      if (!node.right) return node.left;         
    
      let minRight = node.right;
      while (minRight.left) {
        minRight = minRight.left;
      }

      node.data = minRight.data;
      node.right = removeNode(node.right, minRight.data);

      return node;
    }
  }


  min() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.left) current = current.left;

    return current.data;
  }

  max() {
    if (!this.rootNode) return null;

    let current = this.rootNode;
    while (current.right) current = current.right;

    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};