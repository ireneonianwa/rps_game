var player = {
	name: "Guest",
	hand: "",
	wins: 0
}; 

var computer = {
	name: "Computer",
	hand: "",
	wins: 0
}; 

var hands = ["Rock", "Paper", "Scissors"];

//Toggle display of instructions using Rules button 
const showRules = function() {
	var howToPlay = "This is a variation of the classic game Rock, Paper, Scissors. To play, click the Play button and select rock, paper, or scissors when prompted and see how your decision fares against the Computer's AI. Rock beats scissors, scissors beats paper, and paper beats rock. Good luck! (This text will disappear by re-clicking the button marked Rules).";

	const instructions = document.getElementById("rule_info").innerHTML;
	if(instructions.length === 0){
		document.getElementById("rule_info").innerHTML = howToPlay;
	} else {
		document.getElementById("rule_info").innerHTML = null;
	}
};



const showChoices = function(){
	document.getElementById("makechoice").innerHTML=player.name + ", make your choice:";
	var pickHand = document.getElementsByClassName("choices");
	if(pickHand[0].style.visibility == "hidden"){
		pickHand[0].style.visibility = "visible";
	}
};



const getComputerChoice = function() {
	return hands[parseInt(Math.random()*10)%3];
};



const getPlayerChoice = function(clicked) {
	(function(){
		var playerPick = document.getElementsByClassName("handChoice");
		for (var i=0; i<playerPick.length; i++) {
			playerPick[i].style.visibility = "hidden";
		}
	})();
	computer.hand = getComputerChoice();
	// player.hand = 
	checkResult();
};

let displayScore = function(){
	if (player.wins>0 || computer.wins>0) {
		document.getElementsByClassName("statistics")[0].style.visibility = "visible";
		document.getElementById("gameScore").innerHTML = "Overall " +player.name+ " has won " +player.wins+ " games and the Computer has won " +computer.wins+ " games.";
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
	} else if ((player.hand === "Rock" && computer.hand === "Scissors") || (player.hand === "Scissors" && computer.hand === "Paper") || (player.hand === "Paper" && computer.hand === "Rock")){
		player.wins += 1;
		winner = 1;
	} else {
		computer.wins +=1;
		winner = -1;
	}
	displayScore();
	showResult(winner);
};












