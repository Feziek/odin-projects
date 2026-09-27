import Card from './Card';
import '../styles/Deck.css';

export default function Deck({ cards, onCardClick }) {
  return (
    <div className='deck'>
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={onCardClick} />
      ))}
    </div>
  );
}
