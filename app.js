// Player 2 enters in a number

// User enters in the numbers in an input form
// numbers get pushed to an array 
// the numbers in the array are looped over to see if they match any of the numbers in the original 

// for each number 
// if the number is in the array but in the wrong index 
// then tell the user Cow 
// if the user has a number in the right place then say bull
// otherwise give a score back of nothing.

// the user has 7 tries before they lose.

// var winning number = math.random([1])
// player submits 4 numners 
// record the value of the array and then loop through the winning.number.legth array to see 
// if any of the numbers match the numbers.

// If they are in the correct place but wrong place then say cow or bull
// add to counter



$(function(){     
	Game.setup();
}); 

var Game = {};


// // Setting up initial variables

Game.setup = function(){
	Game.counter = 0;
	var updateDisplay = $(".display");
	Game.text = [];
	this.buildBoxes = (prompt("How long a code do you want to unlock?"));
	Game.createValues();
	$("#submit").on("click",Game.submitValue);
	$("#reset").on("click",Game.reset);


}
// Take the users input and create a set of variables based on their inuput/
Game.createValues = function (){
	Game.score = [];
	var range = [1,2,3,4,5,6,7,8,9,0];
	for (var i = 0 ; i < Game.buildBoxes; i ++){
		$("#boxes").append("<input type='text' id='num"+ i +"' class='numbers'>");

		Game.score[i] = parseInt(Math.floor(Math.random() * (9 - 0)) + 0);
	}
	console.log(Game.score);
}
	// pushing the users answer into an array

	Game.submitValue = function(){
		var playerGo = [];

		for (var i = 0 ; i<Game.score.length; i++){
			playerGo.push(parseInt($('#num'+i).val()));
		}

		$(".scores").append('<br/>'+ playerGo);
		console.log("the user has submitted" + " " + playerGo);
		Game.countAnimals(playerGo);
	}


	// // Going through the users answer to see if they match up

	Game.countAnimals = function(playerGo){

		var count = {bulls:0, cows:0};
		Game.counter = 1;
		for (var i = 0; i < playerGo.length; i++) {
			var digPresent = playerGo.indexOf(Game.score[i]);
			if (playerGo[i] == Game.score[i]) {count.bulls++;}
			else if (digPresent>=0) {count.cows++;}
			Game.counter++
			if (count.bulls == playerGo.length && Game.counter < 7){
				console.log("you have won")}
				else if (count.bulls !== playerGo.length && Game.counter < 7) {
					console.log("Sorry Homes")}
					else if (count.bulls !== playerGo.length && Game.counter > 7 ){console.log ("you lose");}

				


				}
				// $("#boxes").html(" ");
				$(".scoreboard1").append('<br/>'+count.cows);
				$(".scoreboard2").append('<br/>'+count.bulls);
				console.log("there are" + " " + count.cows + " " + "cows");
				console.log("there are" + " " + count.bulls + " " + "bulls")

		}
		
	// Reset fields

	Game.reset = function(){
		Game.counter = 1;
		$(".scoreboard1").html("");
		$(".scoreboard2").html("");
		$(".scores").html("");


	}



