class Node {
  constructor(value = null) {
    this.value = value;
    this.nextNode = null;
  }
}

class LinkedList {
  #head = null;

  append(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return;
    }

    let current = this.#head;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    current.nextNode = new Node(value);
  }

  preppend(value) {
    if (this.#head === null) {
      this.#head = new Node(value);
      return;
    }

    let temp = this.#head;
    this.#head = new Node(value);
    this.#head.nextNode = temp;
  }

  size() {
    let current = this.#head;
    let count = 0;
    while (current.nextNode || current.nextNode === null) {
      count += 1;
      current = current.nextNode;
      if (current === null) break;
    }
    return count;
  }

  head() {
    if (this.#head === null) return undefined;
    return this.#head.value;
  }

  tail() {
    let current = this.#head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    let current = this.#head;
    let position = 0;
    while (position < index) {
      current = current.nextNode;
      if (current.nextNode === null) return undefined;
      position++;
    }
    return current.value;
  }

  pop() {
    if (this.#head === null) return undefined;
    this.#head = this.#head.nextNode;
    return this.#head;
  }
}
