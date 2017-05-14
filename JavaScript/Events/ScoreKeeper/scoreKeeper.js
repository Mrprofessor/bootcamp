
var p1Button = document.getElementById('p1');
var p2Button = document.getElementById('p2');
var winningScoreDisplay = document.querySelector('p span');
var numInput = document.querySelector('input');

var p1Display = document.querySelector('#p1Display');
var p1Display = document.querySelector('#p1Display');
var resetButton = document.querySelector('#reset');

var p1Score = 0;
var p2Score = 0;

var winningScore = 5;
var gameOver = false;

p1Button.addEventListener("click", function() {
	// body...
	if (!gameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			gameOver = true;
			p1Display.style.color = "green";
		}
	}
	p1Display.textContent = p1Score;	
});


p2Button.addEventListener("click", function() {
	// body...
	if (!gameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			gameOver = true;
			p2Display.style.color = "green";
		}
	}
	p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function () {
	reset();
});

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});

function reset() {
	// body...
	p1Score = 0;
	p2Score = 0;
	winningScore = 5;
	gameOver = false;

	p1Display.style.color = "";
	p1Display.textContent = p1Score;
	p2Display.style.color = "";
	p2Display.textContent = p2Score;
}