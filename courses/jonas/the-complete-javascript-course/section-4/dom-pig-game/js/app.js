/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var activePlayer, roundScore, globalScore;

activePlayer = 0;
roundScore = 0;
globalScore = [0, 0];

// Set all scores to 0
document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;

document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

// Hide Dice Image
var diceImg = document.querySelector('.dice');
diceImg.style.display = 'none';

// Buttons Variable
var btnNewGame  = document.querySelector('.btn-new');
var btnRollDice = document.querySelector('.btn-roll');
var btnHold     = document.querySelector('.btn-hold');

function nextPlayer() {

	// Reset Current Score
	document.getElementById('current-' + activePlayer).textContent = '0';		

	// Reset Round Score
	roundScore = 0;

	// Change Active Player
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

	// Update Active Player UI
	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	// Hide Dice Image
	diceImg.style.display = 'none';

}

function rolling() {

	// Create a Random Number Between 1 to 6
	var randomNumber = Math.floor((Math.random() * 6 + 1));

	// Show Dice Image
	diceImg.style.display = 'block';
	diceImg.src = 'img/dice-' + randomNumber + '.png';	

	// if random number not equal to 1
	if (randomNumber !== 1) {

		// Update Round Score
		roundScore += randomNumber;

		// Update Current Score UI
		document.getElementById('current-' + activePlayer).textContent = roundScore;

	} else {
		nextPlayer();
	}
	
}

function holding() {

	// Add Current Score to Global Score
	globalScore[activePlayer] += roundScore;

	// Update The Global Score UI
	document.getElementById('score-' + activePlayer).textContent = globalScore[activePlayer];

	// Check if player Won the Game

	if (globalScore[activePlayer] >= 30) {
		document.getElementById('name-' + activePlayer).textContent = 'Winner!';

		// Hide Dice Image
		diceImg.style.display = 'none';

		// Remove Active Class
		document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
	} else {
		nextPlayer();
	}
}

btnRollDice.addEventListener('click', rolling);
btnHold.addEventListener('click', holding);