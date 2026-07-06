# Linked Lists Project

A singly linked list implementation built for [The Odin Project — Linked Lists](https://www.theodinproject.com/lessons/javascript-linked-lists) Project.

## Overview

This project implements a `LinkedList` class backed by a `Node` class. Every method is traced and tested against edge cases: empty lists, out-of-range indices, negative indices, and single-node lists.

## Structure

```
linked-lists/
└── src/
    └── LinkedList.js
└── README.md
```

## Classes

### `Node`

Represents a single element in the chain.

| Property   | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `value`    | The data stored in the node. Defaults to `null`.             |
| `nextNode` | Reference to the next node in the chain. Defaults to `null`. |

### `LinkedList`

Manages the chain via a private `#head` reference (a pointer to the first `Node`).

## Methods

| Method             | Description                                                                                                                                  |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| `append(value)`    | Adds a new node containing `value` to the end of the list.                                                                                   |
| `prepend(value)`   | Adds a new node containing `value` to the start of the list.                                                                                 |
| `size()`           | Returns the total number of nodes in the list.                                                                                               |
| `head()`           | Returns the value of the first node. Returns `undefined` if the list is empty.                                                               |
| `tail()`           | Returns the value of the last node. Returns `undefined` if the list is empty.                                                                |
| `at(index)`        | Returns the value of the node at `index`. Returns `undefined` if there's no node at that index (including negative or out-of-range indices). |
| `pop()`            | Removes the head node and returns its value. Returns `undefined` if the list is empty.                                                       |
| `contains(value)`  | Returns `true` if `value` exists in the list, otherwise `false`.                                                                             |
| `findIndex(value)` | Returns the index of the first node containing `value`. Returns `-1` if not found.                                                           |
| `toString()`       | Returns a string representation in the format `( value ) -> ( value ) -> null`. Returns an empty string if the list is empty.                |

## Usage

```js
const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");

console.log(list.toString()); // ( a ) -> ( b ) -> ( c ) -> null
console.log(list.size()); // 3
console.log(list.head()); // "a"
console.log(list.tail()); // "c"
console.log(list.at(1)); // "b"
console.log(list.at(-1)); // undefined
console.log(list.contains("b")); // true
console.log(list.findIndex("c")); // 2
console.log(list.pop()); // "a"
console.log(list.toString()); // ( b ) -> ( c ) -> null
```

## Edge Cases Handled

- Empty-list behavior for every method (`head`, `tail`, `at`, `pop`, `contains`, `findIndex`, `toString`)
- Out-of-range indices in `at(index)`, both beyond the list length and negative
- Ensuring the **last** node is included in traversal-based checks (`contains`, `findIndex`), not just the nodes before it
- Correct reassignment order in `prepend` (capturing the old `head` before overwriting it, so the existing chain isn't orphaned)

## Tech Stack

- Vanilla JavaScript (ES6 classes, private class fields)
- Node.js (for local console testing)
