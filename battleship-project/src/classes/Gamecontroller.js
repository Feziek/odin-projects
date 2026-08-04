class Gamecontroller {
	#isProcessing = false;
	#isGameOver = false;

	constructor(player, computerPlayer) {
		this.player = player;
		this.computerPlayer = computerPlayer;
	}

	handleAttack(coords, onComputerMove, onShipSunk, onGameOver, onAttackResult) {
		if (this.#isProcessing) return;
		if (this.#isGameOver) return;
		if (this.computerPlayer.gameboard.isCellHit(coords)) return;
		this.#isProcessing = true;

		const { hit, sunkCells } =
			this.computerPlayer.gameboard.recieveAttack(coords);

		if (sunkCells.length > 0) {
			onShipSunk(this.computerPlayer.gameboard.board, sunkCells);
		}

		onAttackResult(hit, 'player');

		if (this.computerPlayer.gameboard.isAllShipsSunk()) {
			onGameOver('player');
			this.#isProcessing = false;
			this.#isGameOver = true;
			return;
		}

		// simulate computer thinking it's move
		setTimeout(() => {
			let xCoord;
			let yCoord;

			do {
				xCoord = Math.floor(Math.random() * 10);
				yCoord = Math.floor(Math.random() * 10);
			} while (this.player.gameboard.isCellHit([xCoord, yCoord]));

			const { hit, sunkCells } = this.player.gameboard.recieveAttack([
				xCoord,
				yCoord,
			]);

			if (sunkCells.length > 0) {
				onShipSunk(this.player.gameboard.board, sunkCells);
			}
			onComputerMove(xCoord, yCoord);
			onAttackResult(hit, 'computer');

			if (this.player.gameboard.isAllShipsSunk()) {
				onGameOver('computer');
				this.#isGameOver = true;
			}

			this.#isProcessing = false;
		}, 3000);
	}

	randomizeShipPlace(user) {
		user.gameboard.resetBoard();
		const shipLength = [5, 4, 3, 3, 2];
		let i = 0;
		let xCoord;
		let yCoord;
		let alignment;

		do {
			xCoord = Math.floor(Math.random() * 10);
			yCoord = Math.floor(Math.random() * 10);
			alignment = Math.floor(Math.random() * 2) === 1;

			const fail = !user.gameboard.placeShip(
				[xCoord, yCoord],
				shipLength[i],
				alignment,
			);

			if (fail) continue;
			i += 1;
		} while (i < shipLength.length);
	}

	startGame(callback) {
		this.randomizeShipPlace(this.computerPlayer);
		callback();
	}

	resetGame() {
		this.#isProcessing = false;
		this.#isGameOver = false;
		this.player.gameboard.resetBoard();
		this.computerPlayer.gameboard.resetBoard();
	}
}

export default Gamecontroller;
