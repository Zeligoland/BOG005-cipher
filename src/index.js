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
const offsetEncInfo = document.getElementById('offsetInput');
const goEncode = document.getElementById('goEncode')
const inputText = document.getElementById('inputEncode');
console.log(inputText.value);

goEncode.addEventListener('click', e => {
    if (offsetEncInfo.value == '') {
      alert('Ingresa un offset.');
    }
  });

  goEncode.addEventListener('click', e => {
    if (offsetEncInfo.value == parseInt('0')) {
      alert('Tu offset debe ser mayor a 0.');
    }
  });

  goEncode.addEventListener('click', e => {
    if (inputText.value == '') {
      alert('Ingresa un mensaje.');
    }
  });

// Prueba de cifrado, por letra
let pruebaCifrado = 'HIJKLMNOPQRSTUVWXYZABCDEFG';
let offsetTest = 33;
let textoII = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

// PRUEBA CIFRADO
for(let i = 0; i < textoII.length; i++){
  if (textoII[i] !== '') {
    let response = textoII.charCodeAt([i]);
    let withoutResidual = (response - 65 + offsetTest);
    let finalOperation = (withoutResidual % 26 + 65);
    console.log(finalOperation);
    let letter = String.fromCharCode(finalOperation);
    console.log(letter);
  }
  }
// Prueba de des-cifrado, por letras

for(let i = 0; i < pruebaCifrado.length; i++){
if (pruebaCifrado[i] !== '') {
  let response = pruebaCifrado.charCodeAt([i]);
  let withoutResidual = (response + 65 - offsetTest);
  let finalOperation = (withoutResidual % 26 + 65);
  console.log(finalOperation);
  let letter = String.fromCharCode(finalOperation);
  console.log(letter);
}
}
function decodePrint(){
  document.getElementById("displayResults").innerHTML = console.log(letter);
}





//Función de impresión de la entrada de texto -- Pruebas
function inputPrint(){
    let showInput = document.getElementById("inputEncode").value;
    document.getElementById("displayResults").innerHTML = showInput;
}
let showMessage = document.getElementById("submit");
showMessage.addEventListener("click", inputPrint);

// Mostrar información en la página
const encodeResults = document.getElementById('showEncodeResults').innerHTML = 

// Declaración de variables para cipher
//Llamar offset, llamar cadena de texto, nominar las variables que entran (abecedario completo)
// let offsetChosen = document.getElementById("offsetInput").value;


//_______________________________________________________________
// encodeEntrance.addEventListener("click", goEncode);
// function ocultar(){
// document.getElementById('h1').style.display = 'none';
// let botonOcultar = document.getElementById("botonDos");
// botonOcultar.addEventListener("click", ocultar);
//let offset = getElementbyId("offsetInput"); // Aquí van los elementos del DOM. De aquí se jalan las variables ingresadas.;
console.log(cipher);