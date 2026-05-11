const createPlayer = (name, marker) => {
	return { name, marker };
};

const GameBoard = (() => {
	const board = new Array(9).fill(null);

	const getBoard = () => [...board];
	const placeMarker = (index, marker) => {
		if (index < 0 || index > 8 || board[index] !== null) return false;
		board[index] = marker;
		return true;
	};
	const resetBoard = () => board.fill(null);

	return {
		getBoard,
		resetBoard,
		placeMarker
	};
})();

const GameController = (() => {
	let player1;
	let player2;
	let playerWinner;
	let currentPlayer;
	let gameStatus = 'active';
	let winningBox;

	const createPlayers = (name1, name2) => {
		player1 = createPlayer(name1, 'X');
		player2 = createPlayer(name2, 'O');
		currentPlayer = player1;
	};

	const winningCombinations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	const switchPlayer = () => {
		if (currentPlayer === player1) {
			currentPlayer = player2;
		} else if (currentPlayer === player2) {
			currentPlayer = player1;
		}
	};

	const checkWinner = () => {
		const board = GameBoard.getBoard();

		for (let i = 0; i < 8; i++) {
			const combination = winningCombinations[i];
			const [first, second, third] = combination;

			if (
				board[first] === board[second] &&
				board[second] === board[third] &&
				board[first] !== null
			) {
				gameStatus = 'won';
				playerWinner = currentPlayer;
				winningBox = [first, second, third];
				break;
			}
		}
		if (gameStatus !== 'won' && board.every(item => item !== null)) {
			gameStatus = 'tied';
		}
	};

	const playRound = index => {
		if (gameStatus !== 'active') return;
		const move = GameBoard.placeMarker(index, currentPlayer.marker);

		if (move) {
			checkWinner();
		} else {
			return;
		}

		if (gameStatus === 'active') {
			switchPlayer();
		}
	};

	const restartGame = () => {
		GameBoard.resetBoard();
		currentPlayer = player1;
		gameStatus = 'active';
		playerWinner = undefined;
		winningBox = undefined;
	};

	const getCurrentPlayer = () => currentPlayer;
	const getPlayerWinner = () => playerWinner;
	const getGameStatus = () => gameStatus;
	const getWinningBox = () => winningBox;

	return {
		createPlayers,
		getCurrentPlayer,
		getPlayerWinner,
		getGameStatus,
		getWinningBox,
		playRound,
		restartGame
	};
})();

const DisplayController = (() => {
	const boxes = Array.from(document.querySelectorAll('.box'));
	const displayTurn = document.querySelector('.turn');
	const startBtn = document.querySelector('.start-btn');
	const restartBtn = document.querySelector('.restart-btn');
	const form = document.querySelector('form');
	const mainUi = document.querySelector('.wrapper');

	const renderBoard = () => {
		const board = GameBoard.getBoard();
		boxes.forEach((box, index) => {
			box.className = 'box';
			const winningBox = GameController.getWinningBox();
			box.textContent = board[index] ?? '';
			if (box.textContent === 'X') {
				box.classList.add('x-box');
				box.classList.remove('o-box');
			} else {
				box.classList.add('o-box');
				box.classList.remove('x-box');
			}

			if (winningBox && winningBox.includes(index)) {
				if (box.textContent === 'X') {
					box.classList.add('x-box-win');
				} else {
					box.classList.add('o-box-win');
				}
			}
		});
	};

	const updateStatus = () => {
		const gameStatus = GameController.getGameStatus();
		const currentPlayer = GameController.getCurrentPlayer();

		switch (gameStatus) {
			case 'active':
				displayTurn.textContent = `${currentPlayer.name}'s Turn`;
				if (currentPlayer.marker === 'X') {
					displayTurn.classList.replace('o-turn', 'x-turn');
				} else {
					displayTurn.classList.replace('x-turn', 'o-turn');
				}
				break;
			case 'won':
				displayTurn.textContent = `${GameController.getPlayerWinner().name} Wins!`;
				break;
			case 'tied':
				displayTurn.textContent = "It's a tie";
				break;
		}
	};

	const initializeGame = () => {
		startBtn.addEventListener('click', () => {
			const inputPlayer1 = document
				.querySelector('.player1-input')
				.value.trim();
			const inputPlayer2 = document
				.querySelector('.player2-input')
				.value.trim();
			GameController.createPlayers(inputPlayer1, inputPlayer2);
			form.classList.add('none');
			mainUi.classList.remove('none');
			updateStatus();
			boxes.forEach(box => {
				box.addEventListener('click', () => {
					const index = Number(box.dataset.index);
					GameController.playRound(index);
					renderBoard();
					updateStatus();
				});
			});
		});
		restartBtn.addEventListener('click', () => {
			GameController.restartGame();
			renderBoard();
			updateStatus();
		});
	};

	initializeGame();
})();
