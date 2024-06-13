var css =  document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient(){
    body.style.background = "linear-gradient(to right, "
    + color1.value + ", " + color2.value + " )";

    css.textContent = body.style.background + ";"
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const btn = document.getElementById('btn');
const color = document.getElementById('color');


btn.addEventListener('click', function() {
    let hexColor = '#';
    for(let i = 0; i<6; i++){
        hexColor += hex[getRandomNumber()];
    }
    console.log(hexColor)
    document.body.style.background = hexColor;
    color.textContent = hexColor;

});

function getRandomNumber(){
    return Math.floor(Math.random()* hex.length);
}

