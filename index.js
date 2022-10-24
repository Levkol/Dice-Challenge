//Random Image 1:
var randomNumber1 = Math.floor(Math.random() * 6) + 1; // Random Number 1-6

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImageScource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageScource);


//Random Image 2 (shorter):
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageScource2 = "images/dice" + randomNumber2 + ".png";

image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageScource2);


//The winner is..
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML = "Payer 2 Wins!🚩";
}

else {
  document.querySelector("h1").innerHTML = "Draw!";
}
