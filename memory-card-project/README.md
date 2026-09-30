# Memory Card Game

A React implementation of [The Odin Project's Memory Card project](https://www.theodinproject.com/lessons/node-path-react-new-memory-card). Instead of classic pair-matching, this variant challenges you to click through a deck **without clicking the same card twice** — the deck reshuffles after every valid click, and your score is how many unique cards you can get through in a row. [Play Online](https://memory-game-eight-swart-24.vercel.app/).

## How to play

- Click any card to score a point.
- The deck reshuffles after every valid click.
- Click a card you've already clicked, and it's game over.
- Click every card in the deck without a repeat, and you win.
- Your best score is tracked across games.

## Built with

- **React** (hooks: `useState`, `useEffect`)
- **Vite** — build tool / dev server
- [**PokeAPI**](https://pokeapi.co/) — card images and names, fetched on load

## Architecture

State is lifted entirely into `App`, which owns the game data and logic:

- `App` — owns `cards`, `clickedCards`, `currentScore`, `highestScore`, and `gameStatus`; fetches Pokémon data on mount, handles click logic (scoring, win/lose detection), shuffling, and game resets.
- `Deck` — a "dumb" component; receives `cards` and a click handler as props and renders the grid.
- `Card` — stateless; displays a single card's image and name, and reports clicks upward.
- `Scoreboard` — displays current and best score.
- `Modal` — generic win/lose screen with a "Play Again" button, reused for both outcomes.

## Run locally

```bash
git clone <repo-url>
cd memory-card-project
npm install
npm run dev
```

Then open the local dev server URL shown in your terminal.

## Credits

Built as part of The Odin Project's [Memory Card](https://www.theodinproject.com/lessons/node-path-react-new-memory-card) Project.
