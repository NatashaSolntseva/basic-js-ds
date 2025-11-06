const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }


  enqueue(value) {
    const newElement = new ListNode(value);

    if (this.head === null) {
      this.head = newElement;
    } else {
      this.tail.next = newElement;
    }

    this.tail = newElement;
  }

  dequeue() {
    const topElement = this.head.value;
    this.head = this.head.next;
    return topElement;
  }
}

module.exports = {
  Queue
};
