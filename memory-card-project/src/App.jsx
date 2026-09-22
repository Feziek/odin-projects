import { useState } from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';

export default function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  function handleGameUpate(gameInfo) {
    const { status, score } = gameInfo;

    switch (status) {
      case 'lose':
        console.log('You lose');
        if (highestScore < score) setHighestScore(score);
        break;
      case 'win':
        console.log('You win');
        setHighestScore(0);
        break;
      case 'valid':
        console.log('Valid move');
        setCurrentScore(score);
        break;
    }
  }

  return (
    <>
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Deck onGameUpdate={handleGameUpate} />
    </>
  );
}
