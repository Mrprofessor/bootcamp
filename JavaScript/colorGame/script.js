var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll('.square');
var colorDisplay = document.querySelector('#colorDisplay');
var messageDisplay = document.querySelector('#message');
var pickedColor = pickColor();
var h1 = document.querySelector('h1');
var resetButton = document.querySelector('#reset');
var modeButtons = document.querySelectorAll('.mode');

colorDisplay.textContent = pickedColor;

//Mother of all Functions
init();
function init() {
	setUpModeButtons();
	setUpSquares();
	reset();
}
function setUpModeButtons() {
	for(var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});	
	}
}
function setUpSquares() {
	for(var i = 0; i < squares.length; i++) {
		//Click event for the squares
		squares[i].addEventListener("click", function() {
			//Grab the color of the square
			var clickedColor = this.style.background;
			//Compare color to picked color
			if(clickedColor === pickedColor) {
				changeColors(clickedColor);
				messageDisplay.textContent = "Correct";
				resetButton.textContent = "Play again?";
				h1.style.background = clickedColor;
			} else {
				messageDisplay.textContent = "Try again";
				this.style.background = document.body.style.background;;
			}
		});
	}
}

resetButton.addEventListener("click", function () {
	reset();
});

//Reset function
function reset() {
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	//change the colors of the squares
	for(var i = 0;i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}					
	}
	h1.style.background = "steelblue";

}


function changeColors(color) {
	//Change colors when correct color is picked.
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}

//Random pick color
function pickColor() {
	var index = Math.floor(Math.random()*colors.length);
	return colors[index];
}

function generateRandomColors(num) {
	// body...
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColors());
	}
	return arr;
}

function randomColors() {
	// body...
	//Red color
	var r = Math.floor(Math.random() * 256);
	//Green
	var g = Math.floor(Math.random() * 256);
	//Blue
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b +")";
}
