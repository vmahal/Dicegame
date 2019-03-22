// Choosing random number For player1
var randomNum1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice" + randomNum1 +".png";
var sa1= document.querySelectorAll("img")[0];
sa1.setAttribute("src",randomImage1);

// Choosing random number for player 2
var randomNum2=Math.floor(Math.random()*6) + 1;
var randomImage2="images/dice" + randomNum2 + ".png";
var sa2=document.querySelectorAll("img")[1];
sa2.setAttribute("src",randomImage2);

// Results
if(randomNum1>randomNum2){
document.querySelector("h1").innerHTML="🚩 Player1 wins";
}
else if (randomNum2>randomNum1) {
  document.querySelector("h1").innerHTML="Player2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}
