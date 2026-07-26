class DisplayController {
	constructor(controller) {
		this.gamecontroller = controller;
	}

	renderBoard(board, visibleShip) {
		const rowLength = board.length;
		const container = document.querySelector('main');
		const boardContainer = document.createElement('div');
		boardContainer.classList.add('board');

		for (let row = 0; row < rowLength; row++) {
			const rowContainer = document.createElement('div');
			rowContainer.classList.add('row');
			rowContainer.dataset.row = row;

			for (let col = 0; col < rowLength; col++) {
				const cell = document.createElement('div');
				cell.classList.add('cell');
				cell.dataset.col = col;

				if (visibleShip && board[row][col].ship) cell.classList.add('visible');

				if (board[row][col].isHit && board[row][col].ship) {
					cell.classList.add('ship-hit');
				} else if (board[row][col].isHit) {
					cell.classList.add('hit');
				}

				rowContainer.appendChild(cell);
			}

			boardContainer.appendChild(rowContainer);
		}
		container.appendChild(boardContainer);
	}
}
export default DisplayController;
