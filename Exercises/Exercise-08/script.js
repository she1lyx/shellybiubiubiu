/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let salmonBtn = document.getElementById("salmonButton");
let lightsalmonBtn = document.getElementById("lightsalmonButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
  let body = document.querySelector("body");
  let back = document.querySelector(".back");
  body.style.backgroundColor = "gray";
  body.style.color = "white";
  back.style.color = "white";
}
function switchToWhite() {
  let body = document.querySelector("body");
  let back = document.querySelector(".back");
  body.style.backgroundColor = "white";
  body.style.color = "salmon";
  back.style.color = "salmon";
}
function switchToSalmon() {
  let body = document.querySelector("body");
  let back = document.querySelector(".back");
  body.style.backgroundColor = "salmon";
  body.style.color = "#fedccc";
  back.style.color = "#fedccc";
}
function switchToLightSalmon() {
  let body = document.querySelector("body");
  let back = document.querySelector(".back");
  body.style.backgroundColor = "#fedccc";
  body.style.color = "gray";
  back.style.color = "gray";
}

// 2 -- Add an event listener to each circle

grayBtn.addEventListener("click", switchToGray);
whiteBtn.addEventListener("click", switchToWhite);
salmonBtn.addEventListener("click", switchToSalmon);
lightsalmonBtn.addEventListener("click", switchToLightSalmon);
