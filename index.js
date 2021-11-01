document.querySelector(".start").addEventListener("click", playDice);

function playDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var imagenes1 = "images/dice" + randomNumber1 + ".png";
  var imagenes2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".dado .img1").setAttribute("src", imagenes1);
  document.querySelector(".dado .img2").setAttribute("src", imagenes2);

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 Wins🚩";
  }
}


