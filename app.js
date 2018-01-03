// var numSquares = 6;
// var colors = [];
// var pickedColor;
// var squares = document.querySelectorAll(".square");
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay = document.querySelector("#message");
// var h1 = document.querySelector("h1");
// var resetButton = document.querySelector("#reset");
// var modeButtons = document.querySelectorAll(".mode");


// init();

// function init(){
// 	setupModeButtons();
// 	setupSquares();
// 	reset();
// }

// function setupModeButtons(){
// 	for(var i = 0; i < modeButtons.length; i++){
// 		modeButtons[i].addEventListener("click", function(){
// 			modeButtons[0].classList.remove("selected");
// 			modeButtons[1].classList.remove("selected");
// 			this.classList.add("selected");
// 			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
// 			reset();
// 		});
// 	}
// }

// function setupSquares(){
// 	for(var i = 0; i < squares.length; i++){
// 	//add click listeners to squares
// 		squares[i].addEventListener("click", function(){
// 			//grab color of clicked square
// 			var clickedColor = this.style.background;
// 			//compare color to pickedColor
// 			if(clickedColor === pickedColor){
// 				messageDisplay.textContent = "Correct!";
// 				resetButton.textContent = "Play Again?"
// 				changeColors(clickedColor);
// 				h1.style.background = clickedColor;
// 			} else {
// 				this.style.background = "#232323";
// 				messageDisplay.textContent = "Try Again"
// 			}
// 		});
// 	}
// }



// function reset(){
// 	colors = generateRandomColors(numSquares);
// 	//pick a new random color from array
// 	pickedColor = pickColor();
// 	//change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Colors"
// 	messageDisplay.textContent = "";
// 	//change colors of squares
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.display = "block"
// 			squares[i].style.background = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// 	h1.style.background = "steelblue";
// }

// resetButton.addEventListener("click", function(){
// 	reset();
// })

// function changeColors(color){
// 	//loop through all squares
// 	for(var i = 0; i < squares.length; i++){
// 		//change each color to match given color
// 		squares[i].style.background = color;
// 	}
// }

// function pickColor(){
// 	var random = Math.floor(Math.random() * colors.length);
// 	return colors[random];
// }

// function generateRandomColors(num){
// 	//make an array
// 	var arr = []
// 	//repeat num times
// 	for(var i = 0; i < num; i++){
// 		//get random color and push into arr
// 		arr.push(randomColor())
// 	}
// 	//return that array
// 	return arr;
// }

// function randomColor(){
// 	//pick a "red" from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from  0 -255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from  0 -255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }
























var numSquares=6;
var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn=document.querySelector("#esy");
var hardBtn=document.querySelector("#hrd");


easyBtn.addEventListener("click", function() {
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function() {
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});


resetButton.addEventListener("click", function() {
	//generate all new colors
	colors = generateRandomColors(6);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.background;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.background = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num random colors to arr
	for(var i = 0; i < num; i++) {
		//get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
























// // var color=[

// // "rgb(255,0,0)",
// // "rgb(255,255,0)",
// // "rgb(0,255,0)",
// // "rgb(0,255,255)",
// // "rgb(0,0,255)",
// // "rgb(255,0,255)"


// // ]



// // var sqrs=document.querySelectorAll(".sqr");

// // var pickedColor=color[0];

// // var displayColor=document.getElementById("clickedColor");
 
// //  displayColor.textContent=pickedColor;
// // for(var i=0; i<sqrs.length;i++){

// // 	//add colors

// // 	sqrs[i].style.background=color[i];

// // 	//clicklistener

// // 	sqrs[i].addEventListener("click", function(){
      
// //         var clickedColor=this.style.background;

// //         if(pickedColor === clickedColor){
// //         	alert("matche");
// //         }
// //         else{
// //         	console.log("wrong");
// //         }

// // 	});


// // }



// var colors = generateRandomColors(6);

// var squares = document.querySelectorAll(".square");
// var pickedColor =pickedColor();
// var colorDisplay = document.getElementById("colorDisplay");
// var messageDisplay=document.querySelector("#message");
// var h1=document.querySelector("h1");
// var button=document.querySelector("#reset");

// button.addEventListener("click",function(){
// 	colors=generateRandomColors(6);
// 	pickColor=pickedColor(); 
// 	colorDisplay.textContent=pickColor;

// 	for(var i=0;i<squares.length;i++){

// 		squares[i].style.backgroud=colors[i];
// 	}


// })

// colorDisplay.textContent = pickedColor;

// for(var i = 0; i < squares.length; i++){
// 	// add initial colors to squares
// 	squares[i].style.background = colors[i];

// 	//add click listeners to squares
// 	squares[i].addEventListener("click", function() {
// 		//grab color of clicked squares
// 		var clickedColor = this.style.background;

// 		console.log(clickedColor, pickedColor);
// 		//compare color to pickedColor
// 		if(clickedColor === pickedColor) {
// 			messageDisplay.textContent="correct!!!!";
// 			changeColor(clickedColor);
// 			h1.style.background=clickedColor;
// 		} else {
// 			this.style.background="#232323";
// 			messageDisplay.textContent="Try Again";

// 		}
// 	});
// }

// function changeColor(color){

// 	for(var i=0;i<squares.length;i++){

// 		squares [i].style.background=color;
// 	}
// }

// function pickedColor(){
// 	var random=(Math.floor(Math.random()*colors.length));
// 	return colors[random];
// }


// function generateRandomColors(num) {
// 	//make an array
// 	var arr = [];
// 	//add num random colors to arr
// 	for(var i = 0; i < num; i++) {
// 		//get random color and push into arr
// 		arr.push(randomColor());
// 	}
// 	//return that array
// 	return arr;

// }	


// function randomColor() {
// 	//pick a "red" from 0 - 255
// 	var r = Math.floor(Math.random() * 256);
// 	//pick a "green" from 0 - 255
// 	var g = Math.floor(Math.random() * 256);
// 	//pick a "blue" from 0 - 255
// 	var b = Math.floor(Math.random() * 256);
// 	return "rgb(" + r + ", " + g + ", " + b + ")";
// }




