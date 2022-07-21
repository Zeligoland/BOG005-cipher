import cipher from './cipher.js';

// Funciones de los botones de interacción en la página
function showOptions(){
    document.getElementById('optionsPage').style.display = 'block';
}
let startButton = document.getElementById("start");
startButton.addEventListener("click", showOptions);

function showEncodeApp(){
    document.getElementById('encodeApp').style.display = 'block';
}
let encodeAppButton = document.getElementById('encodeStart');
encodeAppButton.addEventListener("click", showEncodeApp);

function showDecodeApp(){
    document.getElementById('decodeApp').style.display = 'block';
}
let decodeAppButton = document.getElementById('decodeStart');
decodeAppButton.addEventListener("click", showDecodeApp);

//Declaración de Variables
const offsetEncInfo = document.getElementById('encodeOffset');
const goEncode = document.getElementById('goEncode')
const inputEncode = document.getElementById('inputEncode');

goEncode.addEventListener('click', e => {
    if (offsetEncInfo.value == '') {
      alert('Ingresa un offset.');
    }
  });

  goEncode.addEventListener('click', e => {
    if (inputEncode.value == '') {
      alert('Ingresa un mensaje.');
    }
  });

  goEncode.addEventListener('click', e => {
    if (offsetEncInfo.value == parseInt('0')) {
      alert('Tu offset debe ser mayor a 0.');
    }
  });

  //Declaración variables texto
  const EncodeText = document.getElementById('inputEncode');


//Función de impresión de la entrada de texto -- Pruebas
function inputPrint(){
    let showInput = document.getElementById("inputEncode").value;
    document.getElementById("displayResults").innerHTML = showInput;
}
let showMessage = document.getElementById("submit");
showMessage.addEventListener("click", inputPrint);

// Declaración de variables para cipher
//Llamar offset, llamar cadena de texto, nominar las variables que entran (abecedario completo)
let offsetChosen = document.getElementById("offsetInput").value;


//_______________________________________________________________
// encodeEntrance.addEventListener("click", goEncode);
// function ocultar(){
// document.getElementById('h1').style.display = 'none';
// let botonOcultar = document.getElementById("botonDos");
// botonOcultar.addEventListener("click", ocultar);
//let offset = getElementbyId("offsetInput"); // Aquí van los elementos del DOM. De aquí se jalan las variables ingresadas.;
console.log(cipher);