class Gamecontroller {
	#isProcessing = false;

	constructor(player, computerPlayer) {
		this.player = player;
		this.computerPlayer = computerPlayer;
	}

	handleAttack(coords) {
		if (this.#isProcessing) return;
		this.#isProcessing = true;

		this.computerPlayer.gameboard.recieveAttack(coords);
		if (this.computerPlayer.gameboard.isAllShipsSunk()) {
			//placeholder need to change it later
			console.log('Player Won!');
			this.#isProcessing = false;
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

			this.player.gameboard.recieveAttack([xCoord, yCoord]);

			if (this.player.gameboard.isAllShipsSunk()) {
				//placeholder need to change it later
				console.log('Computer Won!');
			}

			this.#isProcessing = false;
		}, 5000);
	}

	randomizeShipPlace(user) {
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

	initializeGame(callback) {
		this.randomizeShipPlace(this.computerPlayer);
		callback();
	}
}

export default Gamecontroller;
