import '../styles/Scoreboard.css';

export default function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className='scoreboard'>
      <div className='logo'>Memory Game</div>
      <div className='score-container'>
        <p className='current-score'>Current Score: {currentScore}</p>
        <p className='highest-score'>Highest Score: {highestScore}</p>
      </div>
    </div>
  );
}
