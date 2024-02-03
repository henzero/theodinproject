const choices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => {
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

const getPlayerChoice = () => {
	let player = prompt("Rock, Paper, or Scissors?");

	while (!choices.toLowerCase.includes(player).toLowerCase) {
		console.log("Invalid input!");
		player = prompt("Rock, Paper, or Scissors?");
	}

	return player.charAt(0).toUpperCase + player.slice(1).toLowerCase;
};
