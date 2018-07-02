var player1button = document.querySelector('#player1');
var player2button = document.querySelector('#player2');
var resetButton = document.querySelector('#reset');
var player1ScoreDisplay = document.querySelector('#player1Score');
var player2ScoreDisplay = document.querySelector('#player2Score');
var winningScoreDisplay = document.querySelector('#winningScore');
var input = document.querySelector('input');
var player1Score = 0;
var player2Score = 0;
var winningScore = 5;
var gameOver = false;

player1button.addEventListener('click', function() {
	if (!gameOver) {
		player1Score++;
		player1ScoreDisplay.textContent = player1Score;

		if (player1Score === winningScore) {
			gameOver = true;
			player1ScoreDisplay.classList.add('winner');
		}
	}
});

player2button.addEventListener('click', function() {
	if (!gameOver) {
		player2Score++;
		player2ScoreDisplay.textContent = player2Score;

		if (player2Score === winningScore) {
			gameOver = true;
			player2ScoreDisplay.classList.add('winner');
		}
	}
});

resetButton.addEventListener('click', function() {
	reset();
});

input.addEventListener('change', function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset() {
	player1Score = 0;
	player2Score = 0;
	player1ScoreDisplay.textContent = 0;
	player2ScoreDisplay.textContent = 0;
	gameOver = false;
	player1ScoreDisplay.classList.remove('winner');
	player2ScoreDisplay.classList.remove('winner');	
}