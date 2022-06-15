/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//write your code here

var palo = ["♥", "♠️", "♣️", "♦"];
var numero = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let arriba = document.querySelector(".paloArriba");
let valor = document.querySelector(".numero");
let abajo = document.querySelector(".paloAbajo");

function cartaAleatoria(palos, numeros) {
  let carta = [];
  carta.push(palos[Math.floor(Math.random() * palos.length)]);
  carta.push(numeros[Math.floor(Math.random() * numeros.length)]);
  return carta;
}
function asignoColor(arr) {
  if (arr[0] == "♥" || arr[0] == "♦") {
    arriba.style.color = "red";
    abajo.style.color = "red";
  } else {
    arriba.style.color = "black";
    abajo.style.color = "black";
  }
}
function asignoValor(arr) {
  valor.innerHTML = arr[1];
  arriba.innerHTML = arr[0];
  abajo.innerHTML = arr[0];
}

function generacionCarta() {
  let carta = cartaAleatoria(palo, numero);
  asignoColor(carta);
  asignoValor(carta);
}

window.onload = function() {
  generacionCarta();
};
