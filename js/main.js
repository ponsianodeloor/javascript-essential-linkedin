"use strict";

/*
 eventos del teclado
  keydown
  keypress
  keyup
*/


window.addEventListener("keydown", function(event){
 console.log("keydown tecla");
 console.log(event.keyCode);
 console.log(String.fromCharCode(event.keyCode));
});

window.addEventListener("keypress", function(event){
 console.log("keypress tecla");
});

window.addEventListener("keyup", function(event){
 console.log("keyup tecla");
});
