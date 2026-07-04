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

  tail() {
    if (this.#head === null) return undefined;
    let current = this.#head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current.value;
  }

  at(index) {
    if (index < 0) return undefined;
    let current = this.#head;
    let position = 0;
    while (position < index) {
      current = current.nextNode;
      if (!current) return undefined;
      position++;
    }

    return current.value;
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
      if (current.value === value) return true;
      current = current.nextNode;
    }
    return current.value === value;
  }

  findIndex(value) {
    if (this.#head === null) return -1;
    let current = this.#head;
    let index = 0;
    while (current.value !== value && current.nextNode !== null) {
      current = current.nextNode;
      index++;
    }
    if (current.value === value) return index;
    return -1;
  }

  toString() {
    let string = "";
    if (this.#head === null) return "";
    let current = this.#head;

    while (current.nextNode !== null) {
      string += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    string += `( ${current.value} ) -> null`;
    return string;
  }
}

const list = new LinkedList();
list.append("a");
list.append("b");
list.append("c");

console.log(list.at(-1));
console.log(list.contains("z"));
