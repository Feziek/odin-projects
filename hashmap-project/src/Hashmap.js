import LinkedList from "./LinkedList.js";

class HashMap {
  #loadFactor = 0.75;
  #capacity = 16;
  #buckets = Array.from({ length: this.#capacity }, () => new LinkedList());

  hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.#capacity;
    }

    return hashCode;
  }

  set(key, value) {
    const list = this.#buckets[this.hash(key)];
    const node = list.find(key);

    if (node) {
      node.value.value = value;
      return;
    }

    list.append({ key, value });
  }

  get(key) {
    const list = this.#buckets[this.hash(key)];
    const node = list.find(key);

    if (node) {
      return node.value.value;
    }

    return null;
  }

  has(key) {
    const list = this.#buckets[this.hash(key)];
    return list.contains(key);
  }

  remove(key) {
    const list = this.#buckets[this.hash(key)];
    const index = list.findIndex(key);

    if (index === 0) {
      const headNode = list.at(0);

      if (!headNode.nextNode) {
        list.resetList();
        return true;
      }

      headNode.value = headNode.nextNode.value;
      headNode.nextNode = headNode.nextNode.nextNode;
      return true;
    }

    const prevNode = list.at(index - 1);
    if (!prevNode) return false;

    prevNode.nextNode = prevNode.nextNode.nextNode;
    return true;
  }

  length() {
    let count = 0;
    this.#buckets.forEach((bucket) => {
      count += bucket.size();
    });
    return count;
  }

  clear() {
    this.#buckets = Array.from(
      { length: this.#capacity },
      () => new LinkedList(),
    );
  }

  keys() {
    let result = [];
    this.#buckets.forEach((bucket) => {
      result = result.concat(bucket.getKeys());
    });

    return result;
  }

  values() {
    let result = [];
    this.#buckets.forEach((bucket) => {
      result = result.concat(bucket.getValues());
    });

    return result;
  }
}

