var randomNumber1 = Math.floor(Math.random() *6) +1; //1-6 Randomnumber

var randomDiceImage1 ="dice" + randomNumber1 + ".png"; //png dice-1 to png-dice-6 

var randomImageSource = "images/" + randomDiceImage1;//imge /dice-1 image/dice6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


var randomNumber2 = Math.floor(Math.random() *6 ) +1;

var randomImageSource2 ="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩 play 1 wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="play 2 wins🚩!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}