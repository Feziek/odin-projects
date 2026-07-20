import Ship from './Ship.js';

class Gameboard {
	board = Array.from({ length: 10 }, () =>
		Array.from({ length: 10 }, () => ({ ship: null, isHit: false })),
	);
}

export default Gameboard;
