/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Generador de Cartar");
};
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
