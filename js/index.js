const createPlayer = (name, marker) => {
	return { name, marker };
};

const Gameboard = (() => {
	const board = new Array(9).fill(null);

	const getBoard = () => [...board];
	const placeMarker = (index, marker) => {
		if (index < 0 || index > 8 || board[index] !== null) return false;
		board[index] = marker;
		return true
	};
	const resetBoard = () => board.fill(null);

	return {
		getBoard,
		resetBoard,
		placeMarker
	};
})();
