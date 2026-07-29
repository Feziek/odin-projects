import Ship from './Ship.js';

class Gameboard {
	board = Array.from({ length: 10 }, () =>
		Array.from({ length: 10 }, () => ({ ship: null, isHit: false })),
	);
	#missedShot = [];
	#ships = [];
	#offset = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
		[-1, -1],
		[1, -1],
		[1, 1],
		[-1, 1],
	];

	placeShip(coords, length, isHorizontal) {
		if (!this.#isValidPosition(coords, length, isHorizontal)) return false;

		const ship = new Ship(length);
		this.#ships.push(ship);
		const cells = this.#getCells(coords, length, isHorizontal);

		for (const cell of cells) {
			const [x, y] = cell;
			this.board[x][y].ship = ship;
		}

		return true;
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

		if (!this.#isClearOfAdjacentShips(coords, length, isHorizontal))
			return false;

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

	#isClearOfAdjacentShips(coords, length, isHorizontal) {
		const cells = this.#getCells(coords, length, isHorizontal);

		for (const cell of cells) {
			const [x, y] = cell;

			for (const neighbor of this.#offset) {
				const [dx, dy] = neighbor;
				const nx = x + dx;
				const ny = y + dy;

				if (nx > 9 || nx < 0 || ny > 9 || ny < 0) continue;
				if (this.board[nx][ny].ship) return false;
			}
		}

		return true;
	}

	recieveAttack(coords) {
		const [x, y] = coords;
		const cell = this.board[x][y];

		if (cell.isHit) return;
		cell.isHit = true;

		if (cell.ship) {
			cell.ship.hit();
			return;
		}

		this.#missedShot.push(coords);
	}

	isAllShipsSunk() {
		return this.#ships.every((ship) => ship.isSunk());
	}

	isCellHit(coords) {
		const [x, y] = coords;
		return this.board[x][y].isHit;
	}

	get missedShot() {
		return [...this.#missedShot];
	}

	resetBoard() {
		this.board = Array.from({ length: 10 }, () =>
			Array.from({ length: 10 }, () => ({ ship: null, isHit: false })),
		);
		this.#ships = [];
	}
}

export default Gameboard;
