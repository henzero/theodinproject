const choices = ["Rock", "Paper", "Scissors"];

const computerChoice = () => {
	const random = Math.floor(Math.random() * 3);
	let computerChoice;

	if (random == 0) {
		computerChoice = choices[0];
	} else if (random == 1) {
		computerChoice = choices[1];
	} else if (random == 2) {
		computerChoice = choices[2];
	}

	return computerChoice;
};

const playerChoice = () => {
	let player = prompt("Rock, Paper, or Scissors?");

	while (!choices.toLowerCase.includes(player).toLowerCase) {
		console.log("Invalid input!");
		player = prompt("Rock, Paper, or Scissors?");
	}

	return player.charAt(0).toUpperCase + player.slice(1).toLowerCase;
};

function playGame(playerChoice, computerChoice) {
	let count;

	if (playerChoice == choices[1] && computerChoice == choices[0]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${playerChoice} beats ${computerChoice}\n--You win!--`);
		++count;
	} else if (playerChoice == choices[0] && computerChoice == choices[2]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${playerChoice} beats ${computerChoice}\n--You win!--`);
		++count;
	} else if (playerChoice == choices[2] && computerChoice == choices[1]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${playerChoice} beats ${computerChoice}\n--You win!--`);
		++count;
	} else if (playerChoice == choiceshoice[0] && computerChoice == choices[1]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${computerChoice} beats ${playerChoice}\n--You lose!--`);
		++count;
	} else if (playerChoice == choices[1] && computerChoice == choices[2]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${computerChoice} beats ${playerChoice}\n--You lose!--`);
		++count;
	} else if (playerChoice == choices[2] && computerChoice == choices[0]) {
		console.log(`${playerChoice} vs ${computerChoice}\n${computerChoice} beats ${playerChoice}\n--You lose!--`);
		++count;
	} else {
		for (let i = 0; i < playerChoice.length; i++) {
			if (playerChoice == choices[i] && computerChoice == choices[i]) {
				console.log(`${playerChoice} vs ${computerChoice}\n--It's a tie!--`);
			}
		}
	}

	console.log(`Score: ${count}`);
	return count;
}
