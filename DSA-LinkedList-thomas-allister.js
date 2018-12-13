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
    while (current !== null && current.value !== item) {
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
      let current = this.head;
      let previous = this.head;
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
    if (current === null) {
      return console.log('Item not found');
    }
    current.next = new _Node(item, current.next);
  }

  insertAt(item, position) {
    let counter = 1;
    if (position === 1) {
      this.insertFirst(item);
    } else {
      let previous = this.head;
      let current = this.head;
      while (current !== null && counter !== position) {
        previous = current;
        current = current.next;
        counter++;
      }
      if (current === null && counter === position) {
        previous.next = new _Node(item, null);
      }
      if (current === null && counter < position) {
        return console.log('Position is unreachable');
      }
      previous.next = new _Node(item, current);
    }
  }
}

function display(ll) {
  console.log(JSON.stringify(ll, null, 2));
}

function size(ll) {
  let counter = 0;
  let current = ll.head;
  while (current !== null) {
    current = current.next;
    counter++;
  }
  return counter;
}

function isEmpty(ll) {
  return (ll.head === null);
}

function findPrevious(ll, key) {

  if (isEmpty(ll)) {
    return console.log('list is empty');
  }
  if (ll.head.value === key) {
    return console.log('No previous item');
  } else {
    let current = ll.head
    let previous = ll.head
    while (current !== null && current.value !== key) {
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return console.log('Item not found')
    }
    return previous;
  }
}

function findLast(ll) {
  if (isEmpty(ll)) {
    return console.log('list is empty');
  }
  let current = ll.head;
  while (current.next !== null) {
    current = current.next
  }
  return current;
}

function main() {

  let SLL = new LinkedList();
  SLL.insertFirst('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');

  // console.log(JSON.stringify(SLL, null, 2));

  // SLL.insertLast('Tauhida');

  // console.log(JSON.stringify(SLL, null, 2));

  // SLL.remove('squirrel');

  // SLL.insertBefore('Athena', 'Boomer');

  // console.log(JSON.stringify(SLL, null, 2));

  // SLL.insertAfter('Hotdog', 'Helo');

  // console.log(JSON.stringify(SLL, null, 2));

  // SLL.insertAt('Kat', 3);

  // SLL.remove('Tauhida');

  // SLL.insertAt('Test', 7);

  // console.log(JSON.stringify(SLL, null, 2));

  // display(SLL);

  // console.log(size(SLL));

  // console.log(isEmpty(SLL));

  // console.log(findPrevious(SLL, 'Apollo'));

  console.log(findLast(SLL));


}

// main();



// Mystery program
// This function traverses a linked list to check for duplicate items.
// If duplicates are found, they are removed from the linked list.
// runtime: O(n^2)

function WhatDoesThisProgramDo(lst) {
  let current = lst.head;
  // while current is not the last item enter loop.
  while (current !== null) {
    // declaring newNode as variable
    let newNode = current;
    // if newNode.next is not at the end of the linked list enter loop
    while (newNode.next !== null) {
      // if there are two consecutive values that are the same enter if block
      if (newNode.next.value === current.value) {
        // sets the newNode.next pointer to the node after current thus removing it from the linked list.
        newNode.next = newNode.next.next;
      }
      else {
        // if we do not enter the if block above, run the statement below to continue traversing the linked list.
        newNode = newNode.next;
      }
    }
    // once we complete the while loop, run statement below to continue traversing the linked list.
    current = current.next;
  }
}


// Reverse a list
function reverseAList(ll) {
  let current = ll.head;
  let previous = null;
  let tempNext = null;
  while (current !== null) {
    tempNext = current.next;
    current.next = previous;
    previous = current;
    current = tempNext;
  }
  ll.head = previous;
  return ll;
}

function reverseTest() {
  let SLL = new LinkedList();
  SLL.insertFirst('a');
  SLL.insertLast('b');
  SLL.insertLast('c');
  SLL.insertLast('d');
  SLL.insertLast('e');
  reverseAList(SLL);
  display(SLL);
}

reverseTest();