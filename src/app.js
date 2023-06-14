/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const coreCardBase = () => {
  let pintas = ["\u2660", "\u2663", "\u2665", "\u2666"];
  let numeros = ["A", "K", "Q", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const cards = [];
  for (let pinta of pintas) {
    for (let numero of numeros) {
      cards.push({ pinta, numero });
    }
  }
};
const htmlFather = document.querySelector("#randomcard");

const card = `<div class="grid-container">
    <div class="card">
    <div>
    <span class="pintatop">simbolo</span>
    </div>
    <div class="number">numero</div>
    <div>
    <span class="pintabot">simbolo</span>
    </div>
    </div>
    </div>
    `;
htmlFather.innerHTML += card;

// window.onload = function() {
//   //write your code here
//   console.log("Generador de Cartar");
// };
