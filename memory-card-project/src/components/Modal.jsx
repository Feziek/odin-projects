import '../styles/Modal.css';

export default function Modal({ onClick, children }) {
  return (
    <div className='modal-overlay'>
      <div className='modal'>
        {children}
        <button onClick={onClick}>Play Again</button>
      </div>
    </div>
  );
}
