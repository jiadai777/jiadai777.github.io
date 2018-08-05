// global variables that keep track of the game record
var numOfWin = 0;
var numOfLose = 0;
var numOfTie = 0;
var numOfClick = 0;

//clear the border of an image on the AI choice row after each game
function clearBorder() {
	for (var i = 1; i <=3; i++) {
		document.getElementById("ai" + i).style.border = "none";
		document.getElementById("ai" + i).style.margin = "10px 15px";
	}
}

//AI randomly choose a sign out of rock, paper, and scissors
function getAiChoice() {

	//first update the total number of games played
	numOfClick++;
	document.getElementById("total").textContent = "Total Clicks: " + numOfClick;

	var caseNum = Math.floor((Math.random() * 3) + 1);
	var computerId = "ai" + caseNum;
	clearBorder();
	document.getElementById(computerId).style.border = "3px red solid";
	document.getElementById(computerId).style.margin = "7px 15px";

	return caseNum;
}

/*
These three "if" functions show the result texts depending on 
the result of each game and update game record
*/
function ifTie() {
	document.getElementById("result").textContent = "It's a tie!";
	document.getElementById("result").style.color = "yellow";
	numOfTie++;
	document.getElementById("tie").textContent = "Tie: " + numOfTie;
}

function ifLose() {
	document.getElementById("result").textContent = "You lose!";
	document.getElementById("result").style.color = "red";
	numOfLose++;
	document.getElementById("lose").textContent = "Lose: " + numOfLose;
}

function ifWin() {
	document.getElementById("result").textContent = "You win!";
	document.getElementById("result").style.color = "green";
	numOfWin++;
	document.getElementById("win").textContent = "Win: " + numOfWin;
}

/*
The following three functions will compare the player's choice and AI's choice
of sign and decide whether the play win, lose, or tie accordingly.
The function will be called when the player click on a corresponding image.
*/
function playerChooseRock() {
	var aiChoice = getAiChoice();
	if (aiChoice == 1) {
		ifTie();
	} else if (aiChoice == 2) {
		ifLose();
	} else {
		ifWin();
	}
}

function playerChoosePaper() {
	var aiChoice = getAiChoice();
	if (aiChoice == 1) {
		ifWin();
	} else if (aiChoice == 2) {
		ifTie();
	} else {
		ifLose();
	}
}

function playerChooseScissors() {
	var aiChoice = getAiChoice();
	if (aiChoice == 1) {
		ifLose();
	} else if (aiChoice == 2) {
		ifWin();
	} else {
		ifTie();
	}
}