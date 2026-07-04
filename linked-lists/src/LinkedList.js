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
}
