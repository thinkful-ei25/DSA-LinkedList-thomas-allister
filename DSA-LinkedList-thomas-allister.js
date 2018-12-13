'use strict';

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    let tempNode = this.head;
    while (this.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new _Node(item, null);
  }

  remove(item) {
    if (this.head === null) {
      return console.error('No items in list!');
    }
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let previous = this.head;
    while (current.value !== item && current !== null) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    previous.next = current.next;
  }

  find(item) {
    if (this.head === null) {
      return console.error('No items in list!');
    }
    let current = this.head;
    while (current.value !== item && current !== null) {
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    return current;
  }
}