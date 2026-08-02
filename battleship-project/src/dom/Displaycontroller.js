class DisplayController {
	constructor(controller) {
		this.gamecontroller = controller;
	}

	#renderBoard(board, visibleShip, isPlayer) {
		const rowLength = board.length;
		const container = document.querySelector('.boards-container');
		const oldBoard = document.querySelector(
			isPlayer ? '.player-board' : '.computer-board',
		);
		const boardContainer = document.createElement('div');
		boardContainer.classList.add(isPlayer ? 'player-board' : 'computer-board');

		for (let row = 0; row < rowLength; row++) {
			const rowContainer = document.createElement('div');
			rowContainer.classList.add('row');

			for (let col = 0; col < rowLength; col++) {
				const cell = document.createElement('div');
				cell.classList.add('cell');
				cell.dataset.row = row;
				cell.dataset.col = col;

				if (visibleShip && board[row][col].ship) cell.classList.add('visible');
				const classHit = this.#getHitClass(board[row][col]);
				if (classHit) cell.classList.add(classHit);

				rowContainer.appendChild(cell);
			}

			boardContainer.appendChild(rowContainer);
		}

		if (oldBoard) container.replaceChild(boardContainer, oldBoard);
		else container.appendChild(boardContainer);
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
			const row = Number(e.target.dataset.row);

			this.gamecontroller.handleAttack(
				[row, col],
				(xCoord, yCoord) => {
					this.#updateCell(
						playerBoardEl,
						this.gamecontroller.player.gameboard.board,
						xCoord,
						yCoord,
					);
				},
				(board, coordsArr) => {
					const boardEl =
						this.gamecontroller.player.gameboard.board === board
							? playerBoardEl
							: computerBoardEl;
					for (const cell of coordsArr) {
						const [x, y] = cell;
						this.#updateCell(boardEl, board, x, y);
					}
				},
				(winner) => this.#announceWinner(winner),
			);

			this.#updateCell(
				computerBoardEl,
				this.gamecontroller.computerPlayer.gameboard.board,
				row,
				col,
			);
		});
	}

	#startNewGame() {
		this.gamecontroller.randomizeShipPlace(this.gamecontroller.player);
		this.#renderBoard(this.gamecontroller.player.gameboard.board, true, true);
		this.#renderBoard(
			this.gamecontroller.computerPlayer.gameboard.board,
			false,
			false,
		);
	}

	#announceWinner(winner) {
		const overlay = document.createElement('div');
		overlay.classList.add('winner-overlay');

		const panel = document.createElement('div');
		panel.classList.add('winner-panel');

		const heading = document.createElement('h2');
		heading.textContent = winner === 'player' ? 'You Win!' : 'Computer Wins!';

		const playAgainBtn = document.createElement('button');
		playAgainBtn.classList.add('play-again-btn');
		playAgainBtn.textContent = 'Play Again';
		playAgainBtn.addEventListener('click', () => {
			overlay.remove();
			document.querySelector('.restart-btn').click();
		});

		panel.append(heading, playAgainBtn);
		overlay.appendChild(panel);
		document.querySelector('main').appendChild(overlay);
	}

	init() {
		const startBtn = document.querySelector('.start-btn');
		const randomizeBtn = document.querySelector('.random-btn');
		const restartBtn = document.querySelector('.restart-btn');

		restartBtn.style.display = 'none';

		this.#startNewGame();

		startBtn.addEventListener('click', () => {
			this.gamecontroller.startGame(() => this.#attachOpponentListeners());
			randomizeBtn.style.display = 'none';
			startBtn.style.display = 'none';
			restartBtn.style.display = 'inline';
		});

		randomizeBtn.addEventListener('click', () => {
			this.gamecontroller.randomizeShipPlace(this.gamecontroller.player);
			this.#renderBoard(this.gamecontroller.player.gameboard.board, true, true);
		});

		restartBtn.addEventListener('click', () => {
			restartBtn.style.display = 'none';
			startBtn.style.display = 'inline';
			randomizeBtn.style.display = 'inline';
			this.gamecontroller.resetGame();
			this.#startNewGame();
		});
	}
}
export default DisplayController;
