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

  size() {
    let current = this.#head;
    let count = 0;
    while (current !== null) {
      count += 1;
      current = current.nextNode;
    }
    return count;
  }

  isHead(value) {
    if (this.#head.value.key === value) return true;
    return false;
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

  find(value) {
    if (this.#head === null) return undefined;
    let current = this.#head;

    while (current.value.key !== value && current.nextNode !== null) {
      current = current.nextNode;
    }

    if (current.value.key !== value) return undefined;

    return current;
  }

  resetList() {
    this.#head = null;
  }

  getKeys() {
    const result = [];
    if (this.#head === null) return [];
    let current = this.#head;

    while (current !== null) {
      result.push(current.value.key);
      current = current.nextNode;
    }

    return result;
  }

  getValues() {
    const result = [];
    if (this.#head === null) return [];
    let current = this.#head;

    while (current !== null) {
      result.push(current.value.value);
      current = current.nextNode;
    }

    return result;
  }

  getPair() {
    const result = [];
    if (this.#head === null) return [];
    let current = this.#head;

    while (current !== null) {
      const temp = [];
      temp.push(current.value.key);
      temp.push(current.value.value);
      result.push(temp);
      current = current.nextNode;
    }

    return result;
  }
}

export default LinkedList;
