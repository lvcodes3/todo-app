import { LinkNode } from "./LinkNode";

export class LinkedList {
  head: null | LinkNode;

  constructor(head: null | LinkNode = null) {
    this.head = head;
  }

  toArray() {
    let currentNode: LinkNode | null = this.head;
    const arr: string[] = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  getSize() {
    let counter = 0;
    let currentNode: LinkNode | null = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  insertNode(newNode: LinkNode) {
    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let currentNode: LinkNode | null = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }

  removeNode(index: number) {
    // handler if sll is null
    if (this.head === null) {
      return;
    }

    // handler for removing the head node
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    // handler for all other cases
    let prevNode: LinkNode | null = null;
    let currentNode: LinkNode | null = this.head;

    // loop until currentNode is at the index of node to be removed
    for (let i = 0; i < index; i++) {
      // handler if index out of range
      if (currentNode === null) {
        return;
      }
      // updating prev and curr
      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    // as long as prev and curr are both nodes, proceed to removal
    if (prevNode !== null && currentNode !== null) {
      prevNode.next = currentNode.next;
    }
  }

  updateNode(index: number, data: string) {
    // handler if sll is null
    if (this.head === null) {
      return;
    }

    // handler for updating the head node
    let currentNode: LinkNode | null = this.head;

    for (let i = 0; i < index; i++) {
      // handler if index out of range
      if (currentNode === null) {
        return;
      }
      // updating curr
      currentNode = currentNode.next;
    }

    if (currentNode !== null) {
      currentNode.data = data;
    }
  }

  reverse() {
    let currentNode: null | LinkNode = this.head;
    let prevNode: null | LinkNode = null;

    // loop through the linked list until reaching null
    while (currentNode) {
      // set the next node to the next of currentNode
      let nextNode: null | LinkNode = currentNode.next;
      // set the next pointer of currentNode to prevNode
      currentNode.next = prevNode;
      // set prevNode to currentNode
      prevNode = currentNode;
      // set currentNode to nextNode
      currentNode = nextNode;
    }

    // update the head of the linked list to be prevNode
    this.head = prevNode;
  }
}
