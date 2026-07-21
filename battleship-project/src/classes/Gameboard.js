import Ship from './Ship.js';

class Gameboard {
	board = Array.from({ length: 10 }, () =>
		Array.from({ length: 10 }, () => ({ ship: null, isHit: false })),
	);

	placeShip(coords, length, isHorizontal) {
		if (!this.#isValidPosition(coords, length, isHorizontal)) return;

		const ship = new Ship(length);
		const cells = this.#getCells(coords, length, isHorizontal);

		for (const cell of cells) {
			const [x, y] = cell;
			this.board[x][y].ship = ship;
		}
	}

	#isValidPosition(coords, length, isHorizontal) {
		const [startX, startY] = coords;

		if (isHorizontal) {
			if (startY + length - 1 > 9) return false;
		} else {
			if (startX + length - 1 > 9) return false;
		}

		const cells = this.#getCells(coords, length, isHorizontal);

		for (const cell of cells) {
			const [x, y] = cell;
			if (this.board[x][y].ship) return false;
		}

		return true;
	}

	#getCells(coords, length, isHorizontal) {
		let result = [];
		const [x, y] = coords;

		for (let i = 0; i < length; i++) {
			if (isHorizontal) {
				result.push([x, y + i]);
			} else {
				result.push([x + i, y]);
			}
		}

		return result;
	}
}

export default Gameboard;
