var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 +".png";
var randomImageSource = "images/" + randomDiceImage;

var imaged= document.querySelectorAll("img")[0];
imaged.setAttribute("src",randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice" +randomNumber2+".png";
var images2 = document.querySelectorAll("img")[1];
images2.setAttribute("src",randomDiceImage1);

if(randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML="Player 1 Won";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 won";
}
else{
    document.querySelector("h1").innerHTML="Its a tie";

}
