
var randomnumber1 = Math.floor(Math.random()*6)+1;

var randomdice = "dice-" + randomnumber1 + ".png";

var randomimagesource = "images/" + randomdice;

var images1 = document.querySelectorAll("img")[0];

images1.setAttribute("src", randomimagesource);


var randomnumber2 = Math.floor(Math.random()*6)+1;

var randomimagesource1 = "images/dice-" + randomnumber2 + ".png";

var images2 = document.querySelectorAll("img")[1];

images2.setAttribute("src",randomimagesource1);


if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!";
}

else{
    document.querySelector("h1").innerHTML="Draw";
}