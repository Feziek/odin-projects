# Knights Travails

This project finds the **shortest possible path** a chess knight can take to travel from one square to another on an empty 8x8 chessboard, using **breadth-first search (BFS)**.

Given a `start` square and an `end` square (each as `[x, y]` coordinates, `0`–`7`), `knightMoves` returns the sequence of squares the knight visits along the shortest route.

```js
knightMoves([0, 0], [7, 7]);
// You made it in 6 moves! Here's your path:
// [0, 0]
// [2, 1]
// ...
// [7, 7]
```

## Why BFS?

A chessboard can be modeled as a **graph**: each square is a node, and each legal knight move connects two nodes with an edge. Because the graph is **unweighted** (every move costs exactly "1 move"), BFS is guaranteed to find the shortest path — it explores the board level by level (all squares reachable in 1 move, then all squares reachable in 2 moves, and so on), so the first time it reaches the target square, it does so via the fewest possible moves.

Unlike tree traversal, this graph can contain **cycles** (a knight can return to a square it's already visited), so the algorithm tracks a `visited` set to avoid infinite loops and redundant work.

## Algorithm

1. **Model the moves.** A knight has 8 possible move "shapes," represented as `[dx, dy]` offset pairs (e.g. `[2, 1]`, `[-1, 2]`). Adding an offset to the current square gives a candidate neighbor square.
2. **BFS traversal.**
   - Start a queue with the `start` square.
   - Dequeue a square, generate its 8 candidate neighbors, and filter out any that are off the board (outside `0`–`7`) or already visited.
   - For each valid new neighbor, mark it visited, record its **parent** (the square it came from) in a `Map`, and enqueue it.
   - Repeat until the queue is empty (or the target has been reached).
3. **Reconstruct the path.** Starting at `end`, walk backward through the parent `Map` — `end`'s parent, then that square's parent, and so on — until reaching `start` (which has no parent). Building this list front-to-back (via `unshift`) produces the path in `start → end` order.

## Example

```js
knightMoves([3, 3], [4, 3]);
// Shortest path is 3 moves (a knight can't reach an adjacent square in 1 move).
```

## Usage

```bash
node knightMoves.js
```

Edit the function call at the bottom of the file to test different start/end coordinates.

## Credits

Built as part of The Odin Project's [Knights Travails](https://www.theodinproject.com/lessons/javascript-knights-travails) lesson and Project: Knights Travails.
