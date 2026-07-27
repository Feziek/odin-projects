import Gameboard from '../classes/Gameboard';

class DisplayController {
	constructor(controller) {
		this.gamecontroller = controller;
	}

	renderBoard(board, visibleShip, isPlayer) {
		const rowLength = board.length;
		const container = document.querySelector('main');
		const boardContainer = document.createElement('div');
		boardContainer.classList.add(isPlayer ? 'player-board' : 'computer-board');

		for (let row = 0; row < rowLength; row++) {
			const rowContainer = document.createElement('div');
			rowContainer.classList.add('row');
			rowContainer.dataset.row = row;

			for (let col = 0; col < rowLength; col++) {
				const cell = document.createElement('div');
				cell.classList.add('cell');
				cell.dataset.col = col;

				if (visibleShip && board[row][col].ship) cell.classList.add('visible');
				const classHit = this.#getHitClass(board[row][col]);
				if (classHit) cell.classList.add(classHit);

				rowContainer.appendChild(cell);
			}

			boardContainer.appendChild(rowContainer);
		}
		container.appendChild(boardContainer);
	}

	updateCell(boardContainer, board, row, col) {
		const cell = boardContainer.querySelector(
			`[data-row="${row}"][data-col="${col}"]`,
		);
		const dataCell = board[row][col];
		const classHit = this.#getHitClass(dataCell);
		if (classHit) cell.classList.add(classHit);
	}

	#getHitClass(dataCell) {
		if (dataCell.isHit && dataCell.ship) {
			return 'ship-hit';
		} else if (dataCell.isHit) {
			return 'hit';
		}
	}
}
export default DisplayController;
