import cipher from './cipher.js';
function mostrar(){
    document.getElementById('h1').style.display = 'block';
}

function ocultar(){
    document.getElementById('h1').style.display = 'none';
}
let botonMostrar = document.getElementById("boton");
botonMostrar.addEventListener("click", mostrar);

let botonOcultar = document.getElementById("botonDos");
botonOcultar.addEventListener("click", ocultar);

//let offset = getElementbyId("offsetInput"); // Aquí van los elementos del DOM. De aquí se jalan las variables ingresadas.;
console.log(cipher);