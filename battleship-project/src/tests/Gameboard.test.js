import Gameboard from '../classes/Gameboard';

describe('test Gameboard class', () => {
	let gameboard;

	beforeEach(() => {
		gameboard = new Gameboard();
	});

	// placeShip(coords, length, isHorizontal)
	// where:
	// coords = starting cell in 2D array (must be an array: [row, col])
	// length = length of the ship
	// isHorizontal = define the whether the ship is Horizontal or Vertical

	test('places a horizontal ship correctly across the expected cells', () => {
		gameboard.placeShip([2, 4], 3, true);

		expect(gameboard.board[2][4].ship).not.toBeNull();
		expect(gameboard.board[2][5].ship).not.toBeNull();
		expect(gameboard.board[2][6].ship).not.toBeNull();
	});

	test('places a vertical ship correctly across the expected cells', () => {
		gameboard.placeShip([2, 4], 3, false);

		expect(gameboard.board[2][4].ship).not.toBeNull();
		expect(gameboard.board[3][4].ship).not.toBeNull();
		expect(gameboard.board[4][4].ship).not.toBeNull();
	});

	test('all cells of the same ship reference the same Ship instance', () => {
		gameboard.placeShip([2, 4], 3, true);

		const ship = gameboard.board[2][4].ship;
		expect(gameboard.board[2][5].ship).toBe(ship);
		expect(gameboard.board[2][6].ship).toBe(ship);
	});

	test('does not place a horizontal ship that goes out of bounds', () => {
		gameboard.placeShip([2, 8], 3, true);

		expect(gameboard.board[2][8].ship).toBeNull();
		expect(gameboard.board[2][9].ship).toBeNull();
	});

	test('does not place a vertical ship that goes out of bounds', () => {
		gameboard.placeShip([8, 2], 3, false);

		expect(gameboard.board[8][2].ship).toBeNull();
		expect(gameboard.board[9][2].ship).toBeNull();
	});

	test('allows a horizontal ship placed exactly at the edge (last valid index)', () => {
		gameboard.placeShip([9, 7], 3, true);

		expect(gameboard.board[9][7].ship).not.toBeNull();
		expect(gameboard.board[9][8].ship).not.toBeNull();
		expect(gameboard.board[9][9].ship).not.toBeNull();
	});

	test('does not place a ship overlapping an existing ship', () => {
		gameboard.placeShip([2, 4], 3, true);
		gameboard.placeShip([2, 5], 2, false);

		expect(gameboard.board[3][5].ship).toBeNull();
	});

	test('does not overwrite an existing ship reference on overlap attempt', () => {
		gameboard.placeShip([2, 4], 3, true);
		const originalShip = gameboard.board[2][5].ship;

		gameboard.placeShip([2, 5], 2, false);

		expect(gameboard.board[2][5].ship).toBe(originalShip);
	});

	test('does not mutate isHit when placing a ship', () => {
		gameboard.placeShip([2, 4], 3, true);

		expect(gameboard.board[2][4].isHit).toBe(false);
		expect(gameboard.board[2][5].isHit).toBe(false);
		expect(gameboard.board[2][6].isHit).toBe(false);
	});
});
