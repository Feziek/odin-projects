import prettyPrint from './prettyPrint.js';

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    this.root = this.#buildTree(sortedArr);
  }

  #buildTree(array) {
    const end = array.length - 1;

    if (0 > end) return null;

    const mid = Math.floor(end / 2);
    const root = new Node(array[mid]);

    root.left = this.#buildTree(array.slice(0, mid));
    root.right = this.#buildTree(array.slice(mid + 1));

    return root;
  }

  includes(value, current = this.root) {
    if (!current) return false;
    if (current.data === value) return true;

    if (value < current.data) return this.includes(value, current.left);
    else return this.includes(value, current.right);
  }

  insert(value, current = this.root) {
    if (this.includes(value)) return;
    if (current === null) {
      return new Node(value);
    }

    if (value < current.data) current.left = this.insert(value, current.left);
    else current.right = this.insert(value, current.right);

    return current;
  }
}

export default Tree;
