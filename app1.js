var numbers = document.getElementsByClassName("text");
var submit = document.getElementsByClassName("submit");
var display = document.getElementsByClassName("display");
var num1 = document.getElementsByClassName("numbers");
var num2 = document.getElementsByClassName("numbers");
var num3 = document.getElementsByClassName("numbers");
var num4 = document.getElementsByClassName("numbers");
var playerGo = [];

// Set up event listeners

for (var i =0 ; 1 < numbers.length ; i++){
	numbers[i].addEventListener("click",checkNum());
}

function checkNum (){
	playerGo.push(num1,num2,num3,num4)
	console.log(playerGo);
		
}