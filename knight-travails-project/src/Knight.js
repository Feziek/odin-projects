function knightMoves(start, end) {
  const offsets = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  const queue = [start];
  const visited = new Set();
  visited.add(start.toString());
  const parentMap = new Map();

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === end) break;

    for (const offset of offsets) {
      const neighbor = [current[0] + offset[0], current[1] + offset[1]];

      if (
        neighbor[0] > 7 ||
        neighbor[0] < 0 ||
        neighbor[1] > 7 ||
        neighbor[1] < 0
      )
        continue;
      if (visited.has(neighbor.toString())) continue;

      visited.add(neighbor.toString());
      parentMap.set(neighbor.toString(), current);
      queue.push(neighbor);
    }
  }

  const path = [];
  let node = end;
  while (node !== undefined) {
    path.unshift(node);
    node = parentMap.get(node.toString());
  }

  console.log(`You made it in ${path.length} moves! Here's your path:`);
  path.forEach((x) => console.log(x));
}

knightMoves([0, 0], [7, 7]);
