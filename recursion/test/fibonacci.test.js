import { fibs, fibsRec } from '../src/fibonacci.js';

describe('test iterative version', () => {
	test('it returns the correct sequence (iterative ver)', () => {
		const input = 8;
		const output = [0, 1, 1, 2, 3, 5, 8, 13];

		expect(fibs(input)).toEqual(output);
	});
});


describe('test recursive version', () => {
  
test('it returns the correct sequence (recursion ver)', () => {
	const input = 8;
	const output = [0, 1, 1, 2, 3, 5, 8, 13];

	expect(fibsRec(input)).toEqual(output);
});

test('it returns the base case corretly', () => {
	expect(fibs(1)).toEqual([0, 1]);
	expect(fibs(0)).toEqual([0]);
});
})
