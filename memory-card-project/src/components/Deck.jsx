import Card from './Card';

export default function Deck({ cards, onCardClick }) {
  return (
    <div className='deck'>
      {cards.map((card) => (
        <Card key={card.id} {...card} onClick={onCardClick} />
      ))}
    </div>
  );
}
