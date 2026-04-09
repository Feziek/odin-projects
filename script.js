let userScore = 0;
let computerScore = 0;
let rounds = 5;

function getComputerChoice() {
	const randomNum = Math.floor(Math.random() * 3) + 1;

	if (randomNum === 1) {
		return 'rock';
	} else if (randomNum === 2) {
		return 'paper';
	} else {
		return 'scissors';
	}
}

function getUserChoice() {
	const setUserChoice = prompt(
		"Let's play a game! Please select: rock, paper, or scissors"
	);

	if (!setUserChoice || !setUserChoice.trim()) {
		alert('Please choose!');
		return getUserChoice();
	}

	return setUserChoice.toLowerCase();
}

function playRound() {
	const userChoice = getUserChoice();
	const computerChoice = getComputerChoice();
	if (userChoice === computerChoice) {
		alert(`Tied! You: ${userScore} Computer: ${computerScore}`);
		rounds--;
	} else if (
		(userChoice === 'paper' && computerChoice === 'rock') ||
		(userChoice === 'rock' && computerChoice === 'scissors') ||
		(userChoice === 'scissors' && computerChoice === 'paper')
	) {
		userScore++;
		alert(
			`You win, ${userChoice} beats ${computerChoice}. You: ${userScore} Computer: ${computerScore}.`
		);
		rounds--;
	} else {
		computerScore++;
		alert(
			`You lose, ${computerChoice} beats ${userChoice} You: ${userScore} Computer: ${computerScore}.`
		);
		rounds--;
	}

	if (rounds === 0) {
		alert(
			`That was wonderful! You score ${userScore} point/s out of 5 rounds.`
		);
	} else {
		playRound();
	}
}

playRound();
