// TODO Game needs to stop when winner is declared

// Variables
var xScore = 0;
var oScore = 0;
var turn = true;
var gameOver = false;
$boxes = $('.box');
$scoreBoard = $('#score-board');
$resetBtn = $(".reset-button");
$legacyScore = $("#legacy-score")

//If a box is clicked mark it as either x or o
$boxes.on('click', function(){
	// but only if the game is not over
	if (!gameOver)
	// and only if the box is empty
		if (!(this).innerText)
		//and if it's their turn
			if (turn){
				$(this).text('X')
				turn = false;
				declareWinner();
			}
			else {
				$(this).text('O')
				turn = true;
				declareWinner();
			}

})

// Logic to determine a winner
function declareWinner() {
  if ((box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") || (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") || (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") || (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") || (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") || (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") || (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X")) {
		//displays who is the winner after 100ms
    setTimeout(function(){$scoreBoard.text("X IS THE WINNER"); }, 100);
		// gives x a point
		xScore += 1;
		// prints the current score to the board
		$legacyScore.text(xScore + " :PlayerX || PlayerO: " + oScore);
		// ends the game
		gameOver = true;
  }
  else if ((box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") || (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") || (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") || (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") || (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") || (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") || (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O")){
    setTimeout(function(){ $scoreBoard.text("O IS THE WINNER"); }, 100);
		oScore += 1;
		$legacyScore.text(xScore + " :PlayerX || PlayerO: " + oScore);
		gameOver = true;
  }
}

// Reset button that preserves score game to game
$resetBtn.on('click', function(){
	console.log("X Score: " + xScore)
	console.log("O Score: " + oScore)
	$boxes.text("")
	$scoreBoard.text("")
	gameOver = false
})
