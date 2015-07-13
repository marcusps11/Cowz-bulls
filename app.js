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
	// Game.getValue();
	this.buildBoxes = (prompt("How long a code do you want to unlock?"));
	Game.createValues();
	$("#submit").on("click",Game.submitValue);

}

	



	// $("#submit").on("click",updateDisplay)

// getting a answer for the player to guess

// Game.getValue = function(){
	
// 	var range = [1,2,3,4,5,6,7,8,9,0];

// 	var score1 = parseInt(Math.floor(Math.random() * (9 - 0)) + 0);
// 	var score2 = parseInt(Math.floor(Math.random() * (9 - 0)) + 0);
// 	var score3 = parseInt(Math.floor(Math.random() * (9 - 0)) + 0);
// 	var score4 = parseInt(Math.floor(Math.random() * (9 - 0)) + 0);


// 	Game.text.push(score1,score2,score3,score4)
// 	console.log(Game.text)
// 	Game.check();

// }

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

		console.log(playerGo);
			Game.countAnimals(playerGo);


		}


		// var num1 = $("#num1").val();
		// var num2 = $("#num2").val();
		// var num3 = $("#num3").val();
		// var num4 = $("#num4").val();

		// var numInt1 = parseInt(num1);
		// var numInt2 = parseInt(num2);
		// var numInt3 = parseInt(num3);
		// var numInt4 = parseInt(num4);

		// playerGo.push(numInt1);
		// playerGo.push(numInt2);
		// playerGo.push(numInt3);
		// playerGo.push(numInt4);



	// // Going through the users answer to see if they match up

	 Game.countAnimals = function(playerGo){

	 	var count = {bulls:0, cows:0};
	 	for (var i = 0; i < playerGo.length; i++) {
	 		var digPresent = playerGo.indexOf(Game.text[i]);
	 		if (playerGo[i] == Game.text[i]) {count.bulls++;}
	 		else if (digPresent>=0) {count.cows++; Game.counter++}

			
		}
	 	console.log("there are" + " " + count.cows + " " + "cows");
	 	console.log("there are" + " " + count.bulls + " " + "bulls")

	 }










// Loop over check the playerrGo and see if any of the numbers match those of that in the variable text




// Game.updateDisplay = function(){

// }


