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

  deleteItem(value, current = this.root) {
    const getSuccessor = (curr) => {
      curr = curr.right;
      while (curr !== null && curr.left !== null) curr = curr.left;
      return curr;
    };

    if (!this.includes(value)) return;
    if (!current) return current;

    if (current.data > value) {
      current.left = this.deleteItem(value, current.left);
    } else if (current.data < value) {
      current.right = this.deleteItem(value, current.right);
    } else {
      if (!current.left) return current.right;
      if (!current.right) return current.left;

      const successor = getSuccessor(current);
      current.data = successor.data;
      current.right = this.deleteItem(successor.data, current.right);
    }
    return current;
  }

  levelOrderForEach(callback) {
    if (typeof callback !== 'function')
      throw new TypeError('Parameter must be a function!');
    if (!this.root) return;

    const queue = [];
    let i = 0;
    queue.push(this.root);

    while (queue.length > i) {
      const currentItem = queue[i++];
      callback(currentItem.data);
      if (currentItem.left) queue.push(currentItem.left);
      if (currentItem.right) queue.push(currentItem.right);
    }
  }

  inOrderForEach(callback, current = this.root) {
    if (typeof callback !== 'function')
      throw new TypeError('Parameter must be a function!');
    if (!current) return;

    this.inOrderForEach(callback, current.left);
    callback(current.data);
    this.inOrderForEach(callback, current.right);
  }

  preOrderForEach(callback, current = this.root) {
    if (typeof callback !== 'function')
      throw new TypeError('Parameter must be a function!');
    if (!current) return;

    callback(current.data);
    this.preOrderForEach(callback, current.left);
    this.preOrderForEach(callback, current.right);
  }

  postOrderForEach(callback, current = this.root) {
    if (typeof callback !== 'function')
      throw new TypeError('Parameter must be a function!');
    if (!current) return;

    this.postOrderForEach(callback, current.left);
    this.postOrderForEach(callback, current.right);
    callback(current.data);
  }

  height(value, current = this.root) {
    if (!current) return;

    const findHeight = (node) => {
      if (!node) return -1;
      let count = Math.max(findHeight(node.left), findHeight(node.right));
      return count + 1;
    };

    if (current.data > value) {
      return this.height(value, current.left);
    } else if (current.data < value) {
      return this.height(value, current.right);
    } else {
      return findHeight(current);
    }
  }

  depth(value, current = this.root, count = 0) {
    if (!current) return;

    if (current.data > value) {
      return this.depth(value, current.left, count + 1);
    } else if (current.data < value) {
      return this.depth(value, current.right, count + 1);
    } else {
      return count;
    }
  }
}

export default Tree;
