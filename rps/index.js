const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
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
}
