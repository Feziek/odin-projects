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
}
