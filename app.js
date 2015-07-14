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

	$('#submitButton').on("click", function(){
		Game.setup();
		document.getElementById("submitButton").style.display='none'
		$("#numberOfCode").attr("type", "hidden");
	})   
	
}); 

var Game = {};


// // Setting up initial variables

Game.setup = function(){
	Game.counter = 0;
	var updateDisplay = $(".display");
	this.single = $("#single")
	this.two = $("#two")
	Game.text = [];
	this.buildBoxes = $('#numberOfCode').val();
	Game.createValues();

	$("#submit").on("click", function(){
		Game.submitValue();
	})
	$("#reset").on("click",Game.reset);
	$("#single").on("click",Game.howMany);
	$("#two").on("click",Game.howMany);

	


}
// Take the users input and create a set of variables based on their inuput/
Game.createValues = function (){
	Game.score = [];
	var range = [1,2,3,4,5,6,7,8,9,0];
	for (var i = 0 ; i < Game.buildBoxes; i ++){
		$("#boxes").append("<input type='number' id='num"+ i +"' class='numbers' maxlength='1'>");

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

		$("#scores").append('<br/>'+ playerGo);
		console.log("the user has submitted" + " " + playerGo);
		Game.countAnimals(playerGo);
	}


	// // Going through the users answer to see if they match up

	Game.countAnimals = function(playerGo){
		var soundsArray = ["sounds/You%20In%20Trouble.mp3","sounds/Quit%20Playing%20Ear%20Copy.mp3","sounds/Quit%20Being%20A%20Bitch.mp3","sounds/Ass%20is%20dead.mp3","sounds/Ass%20in%20a%20Taco.mp3","sounds/New%20Recording.mp3"];
		var rand = soundsArray[Math.floor(Math.random()*soundsArray.length)];
		var count = {bulls:0, cows:0};
		Game.counter += 1;
		for (var i = 0; i < playerGo.length; i++) {
			var digPresent = playerGo.indexOf(Game.score[i]);
			if (playerGo[i] == Game.score[i]) {count.bulls++;}
			else if (digPresent>=0) {count.cows++;}
		}
		if (count.bulls === playerGo.length && Game.counter < 7){
			mySound2 = new Audio("sounds/Freedom%20Tastes%20Good.mp3");
			mySound2.play(); 
			console.log("youwin")
			$("#display").text("You win")
			$("#myimage").attr("src", "openpadlock.png")
		}else if (count.bulls !== playerGo.length && Game.counter < 7) {
			mySound1 = new Audio(rand);
			mySound1.play();
			$("#display").text("Try again"); 
		}else if (Game.counter > 7 ){
			mySound = new Audio("sounds/Kill%20You%20Dog.mp3");
			mySound.play();
			console.log("game over") 
		}

			
				$("#scoreboard1").append('<br/>'+count.cows);
				$("#scoreboard2").append('<br/>'+count.bulls);
				console.log("there are" + " " + count.cows + " " + "cows");
				console.log("there are" + " " + count.bulls + " " + "bulls")
				console.log(Game.counter);

			}

	// Reset fields

	Game.reset = function(){
		// Game.counter = 1;
		// $("#scoreboard1").html("");
		// $("#scoreboard2").html("");
		// $("#scores").html("");

		// $('#boxes').html("");
		// Game.setup();


		location.reload();

	}



	// Game.selectDifficulty {
		
	// }

	// Game.playSounds = function(){
	// 	$(#submit).on("click",function(){
	// 		var sound = this.id
	// 	})
	// }



