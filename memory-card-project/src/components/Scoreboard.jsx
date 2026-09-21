export default function Scoreboard({ currentScore, highestScore }) {
  return (
    <div className='scoreboard'>
      <div className='logo'>Logo</div>
      <div className='score-container'>
        <p className='current-score'>Current Score: {currentScore}</p>
        <p className='highest-score'>Highest Score: {highestScore}</p>
      </div>
    </div>
  );
}
