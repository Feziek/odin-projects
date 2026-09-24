import { useState, useEffect } from 'react';
import Deck from './components/Deck';
import Scoreboard from './components/Scoreboard';
import Modal from './components/Modal';

const POKEMON_IDS = [1, 22, 13, 4, 5, 99, 2, 18, 19, 20, 11, 7];

export default function App() {
  const [highestScore, setHighestScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [gameStatus, setGameStatus] = useState('playing');
  const [repeatedClickedCard, setRepeatedClickedCard] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await Promise.all(
        POKEMON_IDS.map((id) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) =>
            res.json(),
          ),
        ),
      );

      const cardData = response.map((item) => {
        return {
          id: item.id,
          name: item.name,
          image:
            item.sprites.other['official-artwork'].front_default ??
            item.sprites.front_default,
        };
      });

      setCards(cardData);
    };

    fetchPokemon();
  }, []);

  function shuffleCards() {
    const array = [...cards];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCards(array);
  }

  function handleClick(id) {
    if (clickedCards.has(id) || gameStatus === 'lose') {
      console.log('game over');
      const newRepeatedClickedCard = cards.find((card) => card.id === id)?.name;
      setRepeatedClickedCard(newRepeatedClickedCard);
      setGameStatus('lose');
      return;
    }

    if (clickedCards.size + 1 === POKEMON_IDS.length) {
      console.log('you won');
      setGameStatus('win');
      return;
    }

    const newClickedCards = new Set(clickedCards);
    newClickedCards.add(id);

    setCurrentScore((prev) => prev + 1);
    setClickedCards(newClickedCards);
    shuffleCards();
  }

  function restartGame() {
    setClickedCards(new Set());
    setRepeatedClickedCard(null);
    setCurrentScore(0);
    shuffleCards();
    setGameStatus('playing');
  }

  function handlePlayAgain() {
    if (highestScore < currentScore) setHighestScore(currentScore);
    restartGame();
  }

  return (
    <>
      {gameStatus === 'win' ? (
        <Modal onClick={handlePlayAgain}>
          <p>
            You win! Congrats, you clicked all 12 cards exactly once. Your
            memory is sharp as knife.
          </p>
        </Modal>
      ) : gameStatus === 'lose' ? (
        <Modal onClick={handlePlayAgain}>
          <p>
            You lose! You've touched {repeatedClickedCard} card twice. Better
            luck next time!
          </p>
        </Modal>
      ) : null}
      <Scoreboard currentScore={currentScore} highestScore={highestScore} />
      <Deck onCardClick={handleClick} cards={cards} />
    </>
  );
}
