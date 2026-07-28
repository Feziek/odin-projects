class DisplayController {
	constructor(controller) {
		this.gamecontroller = controller;
	}

	#renderBoard(board, visibleShip, isPlayer) {
		document.querySelector('.player-board')?.remove();
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

	#updateCell(boardContainer, board, row, col) {
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

	#attachOpponentListeners() {
		const computerBoardEl = document.querySelector('.computer-board');
		const playerBoardEl = document.querySelector('.player-board');
		computerBoardEl.addEventListener('click', (e) => {
			const col = Number(e.target.dataset.col);
			const row = Number(e.target.parentElement.dataset.row);

			this.gamecontroller.handleAttack([row, col], (xCoord, yCoord) => {
				this.#updateCell(
					playerBoardEl,
					this.gamecontroller.player.gameboard.board,
					xCoord,
					yCoord,
				);
			});

			this.#updateCell(
				computerBoardEl,
				this.gamecontroller.computerPlayer.gameboard.board,
				row,
				col,
			);
		});
	}

	init() {
		const startBtn = document.querySelector('.start-btn');
		const randomizeBtn = document.querySelector('.random-btn');

		this.#renderBoard(this.gamecontroller.player.gameboard.board, true, true);
		this.#renderBoard(
			this.gamecontroller.computerPlayer.gameboard.board,
			false,
			false,
		);

		startBtn.addEventListener('click', () => {
			this.gamecontroller.startGame(() => this.#attachOpponentListeners());
			randomizeBtn.style.display = 'none';
			startBtn.disabled = true;
		});

		randomizeBtn.addEventListener('click', () => {
			this.gamecontroller.randomizeShipPlace(this.gamecontroller.player);
			this.#renderBoard(this.gamecontroller.player.gameboard.board, true, true);
		});
	}
}
export default DisplayController;
