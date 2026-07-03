# Recursion Project

A JavaScript exercise from [The Odin Project](https://www.theodinproject.com/lessons/javascript-recursion) covering two classic recursion problems: **Fibonacci** and **Merge Sort**.

## Overview

This project explores recursion by solving the same problem two ways (iteratively vs. recursively) for Fibonacci, then applying a "divide and conquer" recursive strategy to sort an array with Merge Sort.

## Files

```
recursion/
├── src/
│   ├── fibonacci.js
│   └── mergeSort.js
├── test/
│   ├── fibonacci.test.js
│   └── mergeSort.test.js
├── .gitignore
├── babel.config.js
├── package.json
├── package-lock.json
└── README.md
```

## Fibonacci (`src/fibonacci.js`)

Two implementations that both return an array containing `n` numbers from the Fibonacci sequence.

- **`fibs(n)`** — iterative solution
- **`fibsRec(n)`** — recursive solution

```js
fibs(8); // [0, 1, 1, 2, 3, 5, 8, 13]
fibsRec(8); // [0, 1, 1, 2, 3, 5, 8, 13]
```

## Merge Sort (`src/mergeSort.js`)

**`mergeSort(arr)`** — recursively splits an array down to single-element (already sorted) sub-arrays, then merges them back together in sorted order.

```js
mergeSort([]); // []
mergeSort([73]); // [73]
mergeSort([1, 2, 3, 4, 5]); // [1, 2, 3, 4, 5]
mergeSort([3, 2, 1, 13, 8, 5, 0, 1]); // [0, 1, 1, 2, 3, 5, 8, 13]
mergeSort([105, 79, 100, 110]); // [79, 100, 105, 110]
```

## Running the code

This project has no GUI — logic is verified through automated tests rather than manual execution.

```bash
npm install   # installs Jest and Babel
npm test      # runs the test suite
```

Tests live in `test/fibonacci.test.js` and `test/mergeSort.test.js`, covering both Fibonacci implementations and Merge Sort against empty arrays, single-element arrays, already-sorted arrays, and unsorted arrays.

## What I practiced

- Identifying base cases and recursive cases
- Capturing and combining return values from recursive calls
- Tracing the call stack for recursive functions
- Divide-and-conquer problem solving with Merge Sort's split/merge steps
- Writing Jest test cases to verify recursive functions against edge cases

## Resources

- [TOP: Project — Recursion](https://www.theodinproject.com/lessons/javascript-recursion)
- [Khan Academy — Recursive Fibonacci](https://www.youtube.com/watch?v=zg-ddPbzcKM)
- [CS50 — Merge Sort](https://youtu.be/Ns7tGNbtvV4)
