/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Genrador de Cartar");
};
const htmlCard = document.querySelector("#randomcard");
const randomCardDiv = document.createElement("div");
randomCardDiv.id = "card";
randomCardDiv.classList.add("container");
htmlCard.appendChild(randomCardDiv);
