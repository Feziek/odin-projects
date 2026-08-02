class Gamecontroller {
	#isProcessing = false;
	#isGameOver = false;

	constructor(player, computerPlayer) {
		this.player = player;
		this.computerPlayer = computerPlayer;
	}

	handleAttack(coords, onComputerMove, onShipSunk, onGameOver) {
		if (this.#isProcessing) return;
		if (this.#isGameOver) return;
		if (this.computerPlayer.gameboard.isCellHit(coords)) return;
		this.#isProcessing = true;

		const computerNeighbourCoords =
			this.computerPlayer.gameboard.recieveAttack(coords);

		if (computerNeighbourCoords) {
			onShipSunk(this.computerPlayer.gameboard.board, computerNeighbourCoords);
		}

		if (this.computerPlayer.gameboard.isAllShipsSunk()) {
			//placeholder need to change it later
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

			const playerNeighbourCoords = this.player.gameboard.recieveAttack([
				xCoord,
				yCoord,
			]);

			if (playerNeighbourCoords) {
				onShipSunk(this.player.gameboard.board, playerNeighbourCoords);
			}
			onComputerMove(xCoord, yCoord);

			if (this.player.gameboard.isAllShipsSunk()) {
				//placeholder need to change it later
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
