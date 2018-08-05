var n1;
var n2;
var answer;

var numOfCorrect = 0;
var numOfWrong = 0;
var numOfTotal = 0;

function generateQuestion() {
	n1 = Math.floor((Math.random() * 100) + 1);
	n2 = Math.floor((Math.random() * 100) + 1);
	answer = n1 + n2;

	document.getElementById("question").textContent = n1 + " + " + n2 + " = ";
}

generateQuestion();

function checkResult() {

	document.getElementById("title").textContent = "Click 'Next' for a new question.";

	numOfTotal++;
	document.getElementById("total").textContent = "Total Number of Attempted Questions: " + numOfTotal;

	var userAnswer = document.getElementById("answer").value;
	if (userAnswer == answer) {
		document.getElementById("result").textContent = "Correct!";
		document.getElementById("result").style.color = "green";
		numOfCorrect++;
		document.getElementById("correct").textContent = "Correct: " + numOfCorrect;
	} else {
		document.getElementById("result").textContent = "Wrong!";
		document.getElementById("result").style.color = "red";
		numOfWrong++;
		document.getElementById("wrong").textContent = "Wrong: " + numOfWrong;
	}
}

function nextQuestion() {
	generateQuestion();
	document.getElementById("answer").value = "";
	document.getElementById("result").textContent = "Type in your answer and submit to see result.";
}