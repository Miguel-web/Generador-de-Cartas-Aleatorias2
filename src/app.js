/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pinta = ["\u2660", "\u2663", "\u2665", "\u2666"];
let royalty = ["A", "K", "Q", "J", 2, 3, 4, 5, 6, 7, 8, 9, 10];

const htmlFather = document.querySelector("#randomcard");

const card = `<div class="grid-container">
<div class="card">
<div>
<span class="simboltop">simbolo</span>
</div>
<div class="number">numero</div>
<div>
<span class="simbolbot">simbolo</span>
</div>
</div>
</div>
`;
htmlFather.innerHTML += card;

// window.onload = function() {
//   //write your code here
//   console.log("Generador de Cartar");
// };
