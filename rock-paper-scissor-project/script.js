let userScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll('button');
const resultContainer = document.querySelector('.result');

function getComputerChoice() {
	const hand = ['rock', 'paper', 'scissors'];
	const randomNum = Math.floor(Math.random() * 3);

	return hand[randomNum];
}

function getUserChoice(choice) {
	return choice.textContent.toLowerCase();
}

function playRound(btn) {
	const userChoice = getUserChoice(btn);
	const computerChoice = getComputerChoice();

	if (userChoice === computerChoice) {
		resultContainer.textContent = `Stalemate! Both chose ${userChoice}. Scores stay at ${userScore} - ${computerScore}.`;
	} else if (
		(userChoice === 'paper' && computerChoice === 'rock') ||
		(userChoice === 'rock' && computerChoice === 'scissors') ||
		(userChoice === 'scissors' && computerChoice === 'paper')
	) {
		userScore++;
		resultContainer.textContent = `Point to you! Your ${userChoice} absolutely crushes the computer's ${computerChoice}. [You: ${userScore} | CPU: ${computerScore}]`;
	} else {
		computerScore++;
		resultContainer.textContent = `Ouch! The computer's ${computerChoice} beats your ${userChoice}. [You: ${userScore} | CPU: ${computerScore}]`;
	}

	if (userScore === 5) {
		resultContainer.textContent = ` YOU WIN! You dominated the machine ${userScore} to ${computerScore}. Earth is safe!`;
		stopGame();
	} else if (computerScore === 5) {
		resultContainer.textContent = `GAME OVER. The computer wins ${computerScore} to ${userScore}. Better luck next time, human.`;
		stopGame();
	}
}

function stopGame() {
	buttons.forEach(btn => {
		btn.disabled = true;
	});
}

buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		playRound(btn);
	});
});
