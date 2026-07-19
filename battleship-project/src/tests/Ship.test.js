import Ship from '../classes/Ship';

describe('test Ship class constructor and methods', () => {
	test('test constructor', () => {
		const input = 5;
		const output = {
			hits: 0,
			length: 5,
		};

		const ship = new Ship(input);
		expect(ship).toEqual(output);
	});

	test('test Ship methods', () => {
		const ship = new Ship(5);
		ship.hit();

		expect(ship.hits).toBe(1);
		expect(ship.isSunk()).toBe(false);
	});
});
