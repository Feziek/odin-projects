# Battleship

A browser-based Battleship game built with vanilla JavaScript and Webpack, as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

Play against a computer opponent on a 10x10 grid — place your fleet, deploy, and sink every enemy ship before yours goes down.

## Features

- **Ship placement validation** — every placement is checked for board bounds, overlap with existing ships, and adjacency (no ship may touch another, including diagonally)
- **Randomized fleet placement** — one click lays out a full 5-ship fleet (lengths 5, 4, 3, 3, 2) in valid, non-adjacent positions
- **Computer opponent** — attacks on a delay to simulate "thinking," never repeats an already-attacked cell
- **Sunk-ship reveal** — sinking a ship automatically reveals the safe water surrounding it
- **Live status feed** — hit/miss results and win/loss are reported as they happen
- **Restart anytime** — reset and re-randomize without reloading the page

## Architecture

The game logic is fully decoupled from the DOM, tested independently of any UI:

```
src/
├── classes/
│   ├── Ship.js            — hit tracking, sunk detection
│   ├── Gameboard.js        — board state, placement validation, attack resolution
│   ├── Player.js           — wraps a Gameboard
│   └── Gamecontroller.js   — turn orchestration, computer AI, win detection
├── dom/
│   └── Displaycontroller.js — rendering, event wiring, UI feedback
├── tests/
│   ├── Gameboard.test.js
│   └── Ship.test.js
└── index.js                — composition root
```

**Design notes:**

- All classes use dependency injection — `Gamecontroller` receives its `Player`s, `DisplayController` receives its `Gamecontroller`. Nothing constructs its own dependencies, which keeps every piece independently testable.
- `Gameboard` exposes a small public API (`placeShip`, `receiveAttack`, `isCellHit`, `isAllShipsSunk`, `resetBoard`) and keeps validation/coordinate math (`#isValidPosition`, `#getCells`, `#isClearOfAdjacentShips`) private.
- `Gamecontroller` never touches the DOM. It communicates outcomes to `DisplayController` through callbacks (`onComputerMove`, `onShipSunk`, `onGameOver`, `onAttackResult`) passed into `handleAttack`.
- Game logic is covered by Jest tests — correctness is verified by running the test suite, not by manual inspection in the browser.

## Getting started

```bash
git clone https://github.com/Feziek/odin-projects.git
cd battleship-project
npm install
npm run dev       # dev server
npm run build   # production build
npm test        # run the test suite
```

## Tech

Vanilla JavaScript (ES6 classes, private fields), Webpack 5, Jest + Babel.

## Status

Core game loop is complete and fully playable: placement, validated randomization, attacks, computer AI, sinking, and win/loss detection all work end-to-end.

## Credits

Built as part of The Odin Project's [Battleship](https://www.theodinproject.com/lessons/node-path-javascript-battleship) lesson and Project: Battleship
