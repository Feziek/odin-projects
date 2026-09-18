import { useState, useEffect } from 'react';
import Card from './Card';

const POKEMON_IDS = [1, 22, 13, 4, 5, 99, 2, 18, 19, 20, 11, 7];

export default function Deck() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());

  function shuffleCards() {
    const array = [...cards];

    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    setCards(array);
  }

  function handleClick(id) {
    if (clickedCards.has(id)) {
      console.log('game over');
      return;
    }

    if (clickedCards.size + 1 === POKEMON_IDS.length) {
      console.log('you won');
      return;
    }

    const newClickedCards = new Set(clickedCards);
    newClickedCards.add(id);

    setClickedCards(newClickedCards);
    shuffleCards();
  }

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

  return (
    <div className='deck'>
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={handleClick} />
      ))}
    </div>
  );
}
