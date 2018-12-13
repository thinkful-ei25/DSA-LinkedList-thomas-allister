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
    } else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
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
    while (current !== null && current.value !== item) {
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
    while (current !== null && current.value !== key) {
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found');
    }
    return current;
  }

  insertBefore(item, key) {
    if (this.head.value === key) {
      this.head = new _Node(key, this.head.next)
    } else {
      let current = this.head
      let previous = this.head
      while (current !== null && current.value !== key) {
        previous = current;
        current = current.next;
      }
      if (current === null) {
        return console.log('Item not found')
      }
      previous.next = new _Node(item, current)
    }
  }

  insertAfter(item, key) {
    let current = this.head;
    while (current !== null && current.value !== key) {
      current = current.next;
    }
    if (current === null ) {
      return console.log('Item not found');
    }
    current.next = new _Node(item, current.next)
  }

}

function main() {

  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  // console.log(JSON.stringify(SLL, null, 2));

  SLL.insertLast('Tauhida');

  // console.log(JSON.stringify(SLL, null, 2));

  SLL.remove('squirrel');

  SLL.insertBefore('Athena', 'Boomer');

  // console.log(JSON.stringify(SLL, null, 2));

  SLL.insertAfter('Hotdog', 'Helo');

  console.log(JSON.stringify(SLL, null, 2));
}

main();





