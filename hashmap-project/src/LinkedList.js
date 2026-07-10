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

  prepend(value) {
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
    while (true) {
      if (current === null) break;
      count += 1;
      current = current.nextNode;
    }
    return count;
  }

  head() {
    if (this.#head === null) return undefined;
    return this.#head.value;
  }

  isHead(value) {
    if (this.#head.value.key === value) return true;
    return false;
  }

  tail() {
    if (this.#head === null) return undefined;
    let current = this.#head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index === 0) return this.#head;
    if (index < 0) return undefined;
    let current = this.#head;
    let position = 0;
    while (position < index) {
      current = current.nextNode;
      if (!current) return undefined;
      position++;
    }

    return current;
  }

  pop() {
    if (this.#head === null) return undefined;
    const value = this.#head.value;
    this.#head = this.#head.nextNode;
    return value;
  }

  contains(value) {
    if (this.#head === null) return false;
    let current = this.#head;
    while (current.nextNode !== null) {
      if (current.value.key === value) return true;
      current = current.nextNode;
    }
    return current.value.key === value;
  }

  findIndex(value) {
    if (this.isHead(value)) return 0;
    if (this.#head === null) return -1;
    let current = this.#head;
    let index = 0;
    while (current.value.key !== value && current.nextNode !== null) {
      current = current.nextNode;
      index++;
    }
    if (current.value.key === value) return index;
    return -1;
  }

  toString() {
    let string = "";
    if (this.#head === null) return "";
    let current = this.#head;

    while (current.nextNode !== null) {
      string += `( ${JSON.stringify(current.value)} ) -> `;
      current = current.nextNode;
    }

    string += `( ${JSON.stringify(current.value)} ) -> null`;
    return string;
  }

  find(value) {
    if (this.#head === null) return undefined;
    let current = this.#head;

    while (current.value.key !== value && current.nextNode !== null) {
      current = current.nextNode;
    }

    if (current.value.key !== value) return undefined;

    return current;
  }
}

export default LinkedList;
