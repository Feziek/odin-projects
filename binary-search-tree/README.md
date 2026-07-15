# Binary Search Tree

A JavaScript implementation of a self-balancing Binary Search Tree (BST), built as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

Given an array of numbers, the tree deduplicates and sorts the input, then recursively builds a balanced tree where the middle element of each subarray becomes a node's root — keeping the depth difference between any two leaf nodes at most 1.

## Features

- **`buildTree(array)`** — recursively builds a balanced BST from an array
- **`insert(value)`** / **`deleteItem(value)`** — add or remove a value while preserving BST ordering
- **`includes`** — check whether a value exists in the tree
- **Traversals:**
  - `levelOrderForEach(callback)` — breadth-first
  - `inOrderForEach(callback)` — depth-first, left → root → right
  - `preOrderForEach(callback)` — depth-first, root → left → right
  - `postOrderForEach(callback)` — depth-first, left → right → root
- **`height(value)`** — longest path from a given node to a leaf
- **`depth(value)`** — path length from a given node to the root
- **`isBalanced()`** — checks whether every node's left/right subtree heights differ by no more than 1
- **`rebalance()`** — rebuilds the tree from an in-order traversal to restore balance
- **`prettyPrint(node)`** — logs a visual, indented representation of the tree structure to the console

## Project Structure

```
binary-search-tree/
├── main.js              # Driver script demonstrating the Tree class
├── src/
│   ├── Bst.js            # Node and Tree class implementation
│   └── prettyPrint.js    # Console tree-visualization helper
└── README.md
```

## Usage

```js
import Tree from './src/Bst.js';
import prettyPrint from './src/prettyPrint.js';

const tree = new Tree([1, 8, 9, 45, 90, 99, 66, 12, 4, 20, 22, 11, 18, 54, 45]);

prettyPrint(tree.root);
console.log(tree.isBalanced()); // true

tree.insert(101);
tree.insert(102);
tree.insert(103);

console.log(tree.isBalanced()); // false — too many inserts on one side
tree.rebalance();
console.log(tree.isBalanced()); // true
```

Run the included driver script directly with Node:

```bash
node main.js
```

## What This Project Practices

- Recursive tree construction and traversal
- Breadth-first vs. depth-first traversal strategies
- Maintaining BST invariants through insertion and deletion (including the two-children delete case, handled via in-order successor)
- Measuring and reasoning about tree balance

## Credits

Built as part of The Odin Project's [Binary Search Trees](https://www.theodinproject.com/lessons/javascript-binary-search-trees) lesson and Project: Binary Search Trees.
