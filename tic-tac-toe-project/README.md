# Odin Tic Tac Toe

A Tic Tac Toe game built with vanilla JavaScript as part of [The Odin Project](https://www.theodinproject.com/) curriculum.

🎮 **[Play Live](https://tic-tac-toe-feziek.netlify.app/)**

---

## Features

- **Custom Player Names** — Enter your own names before the game starts with a clean form UI
- **Win Detection** — All 8 winning combinations detected instantly
- **Winning Cell Highlight** — The three winning cells glow in the winner's color when the game ends
- **Tie Detection** — Detects when the board is full with no winner
- **Turn Indicator** — Displays whose turn it is with color-coded X and O themes
- **Restart Game** — Reset the board anytime while keeping the same players

---

## Built With

- HTML
- CSS
- Vanilla JavaScript

---

## Concepts Applied

- **Module Pattern via IIFE** — `GameBoard`, `GameController`, and `DisplayController` are encapsulated modules with private state and public APIs
- **Factory Functions** — `createPlayer` stamps out player objects
- **Separation of Concerns** — Each module has a single responsibility; `DisplayController` is the only module that touches the DOM
- **Closures** — Private data like the board array, game status, and player objects are protected inside module closures

---

## Author

**Feziek** — [GitHub](https://github.com/Feziek)