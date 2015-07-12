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


// Setting up initial variables

Game.setup = function(){
	
	Game.check();
	}


// Setting up event listeners
Game.check = function(){
$("#submit").on("click",submitValues);
text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
    
}


Game.submitValues = function(num){
	var playerGo = [];
	var num1 = $(".num1").val();
	var num2 = $(".num2").val();
	var num3 = $(".num3").val();
	var num4 = $(".num4").val();

playerGo.push(num1,num2,num3,num4)

playerGo = playerGo.map (function() {
	return parseInt(num,10);
})

console.log(playerGo);

return(playerGo)
}



// Game.checkForWinner = function(){
// 	console.log(playerGo);
// 	if 
// };

