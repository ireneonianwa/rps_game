document.getElementById("match").disabled = true;

var player = {
	name: "",
	hand: "",
	wins: 0
}; 

var computer = {
	name: "Computer",
	hand: "",
	wins: 0
}; 

var hands = ["rock", "paper", "scissors"];


//Toggle display of instructions using Rules button 
const showRules = function() {
	var howToPlay = "Rock, Paper, Scissors is classic a zero sum game that is usually played by two people using their hands and no tools. The idea is to make shapes with an outstretched hand where each shape will have a certain degree of power and will lead to an outcome (rock breaks scissors, scissors cuts paper, and paper covers rock). This site is a variation of the game where you can try your luck against the Computer's artificial intelligence. To play, click the green Play button and select rock, paper, or scissors when prompted and see how your decision fares against the random choice made by the Computer. If you would like to play a rematch, click the green Rematch button, and the site will keep track of the score for each round played. When you are done, you can click the red Exit button. Good luck! (This text will disappear by re-clicking the blue button marked Rules).";

	const instructions = document.getElementById("rule_info").innerHTML;
	if(instructions.length === 0){
		document.getElementById("rule_info").innerHTML = howToPlay;
	} else {
		document.getElementById("rule_info").innerHTML = null;
	}
};

// const promptName = function() {
// 	var playerName = prompt("Please enter your name", "Bob");
// 	if (playerName != null) {
// 		document.getElementById("makechoice").innerHTML = "Hello " +playerName "! Make your choice:";
// 	}
// };

const showChoices = function(){
	var pickHand = document.getElementsByClassName("choices");
	if(pickHand[0].style.visibility == "hidden"){
		pickHand[0].style.visibility = "visible";
	}
};


const promptName = function(){
	var playerName = prompt("Please enter your name", "Guest");
	if (playerName != null) {
		document.getElementById("makechoice").innerHTML = "Hello " +playerName+ "! Make your choice:";
	}

	showChoices();
};


const getComputerChoice = function() {
	return hands[parseInt(Math.random()*10)%3];
};

const showRestart = function refreshPage() {
	window.location.reload();
};

const getPlayerChoice = function(clicked) {
	(function(){
		var playerPick = document.getElementsByClassName("choices");
		for (var i=0; i<playerPick.length; i++) {
			playerPick[i].style.visibility = "hidden";
		}
	})();
	computer.hand = getComputerChoice();
	player.hand = (clicked);
	checkResult();
};

let displayScore = function(){
	if (player.wins>0 || computer.wins>0) {
		document.getElementsByClassName("statistics")[0].style.visibility = "visible";
		document.getElementById("gameScore").innerHTML = "You have won " +player.wins+ " game(s) and the Computer has won " +computer.wins+ " game(s). Press the Rematch button to keep playing or the Reset button to reset the score";
	}
};

const showResult = function(wnr) {
	var resulttext = "";
	if (wnr == 0) {
		resulttext = "It is a tie with Computer's " + computer.hand;
		document.getElementsByClassName("statistics")[0].style.visibility="visible";
		document.getElementById("gameResult").innerHTML = resulttext;
	} else if (wnr == 1) {
		resulttext = "You have beaten the Computer's " + computer.hand + " with " +player.hand;
		document.getElementsByClassName("statistics")[0].style.visibility="visible";
		document.getElementById("gameResult").innerHTML = resulttext;
	} else if (wnr == -1) {
		resulttext = "Computer has beaten your " +player.hand+ " with " + computer.hand;
		document.getElementsByClassName("statistics")[0].style.visibility="visible";
		document.getElementById("gameResult").innerHTML = resulttext;
	}
};

const checkResult = function() {
	var winner = 0;
	if (player.hand === computer.hand) {
		winner = 0;
	} else if ((player.hand === "rock" && computer.hand === "scissors") || (player.hand === "scissors" && computer.hand === "paper") || (player.hand === "paper" && computer.hand === "rock")){
		player.wins += 1;
		winner = 1;
	} else {
		computer.wins +=1;
		winner = -1;
	};

	document.getElementById("match").disabled = false;
	document.getElementById("yesplay").disabled = true;

	// var hidePlay = document.getElementsByClassName("ugh");
	// if (hidePlay[0].style.opacity=="100%") {
	// 	hidePlay[0].style.opacity="50%";
	// };

	// var playAgain = document.getElementsByClassName("moregame");
	// if (playAgain[0].style.opacity=="50%") {
	// 	playAgain[0].style.opacity="100%";
	// };

	displayScore();
	showResult(winner);

};




const showExit = function() {
	var gameText = document.getElementById("headingMessage");
	if (gameText.innerHTML === "Play Rock, Paper, Scissors!") {
		gameText.innerHTML = "Thanks for Playing!";
	} else {
		gameText.innerHTML = "Play Rock, Paper, Scissors!";
	};
	document.getElementById("playGame").innerHTML =null;
};












