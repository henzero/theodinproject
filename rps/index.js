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

	while (!choices.map((choice) => choice.toLowerCase()).includes(player.toLowerCase())) {
		console.log("Invalid input!");
		player = prompt("Rock, Paper, or Scissors?");
	}

	return player.charAt(0).toUpperCase + player.slice(1).toLowerCase;
};

function playRound(player, computer) {
	let point;

	if (player == choices[1] && computer == choices[0]) {
		console.log(`${player} vs ${computer}\n${player} beats ${computer}\n--You win!--`);
		++point;
	} else if (player == choices[0] && computer == choices[2]) {
		console.log(`${player} vs ${computer}\n${player} beats ${computer}\n--You win!--`);
		++point;
	} else if (player == choices[2] && computer == choices[1]) {
		console.log(`${player} vs ${computer}\n${player} beats ${computer}\n--You win!--`);
		++point;
	} else if (player == choices[0] && computer == choices[1]) {
		console.log(`${player} vs ${computer}\n${computer} beats ${player}\n--You lose!--`);
	} else if (player == choices[1] && computer == choices[2]) {
		console.log(`${player} vs ${computer}\n${computer} beats ${player}\n--You lose!--`);
	} else if (player == choices[2] && computer == choices[0]) {
		console.log(`${player} vs ${computer}\n${computer} beats ${player}\n--You lose!--`);
	} else {
		while () {
			
		}
		for (let i = 0; i < player.length; i++) {
			if (player == choices[i] && computer == choices[i]) {
				console.log(`${player} vs ${computer}\n--It's a tie!--`);
			}
		}
	}

	return point;
}

function playGame() {
	let score = 0;

	for (let i = 0; i < 5; i++) {
		score += playRound(playerChoice(), computerChoice());
	}

	console.log("Score: ", score);
}
