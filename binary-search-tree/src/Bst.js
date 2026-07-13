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
}

export default Tree;
