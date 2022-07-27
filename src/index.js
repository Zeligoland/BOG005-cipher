import cipher from './cipher.js';

// Funciones de los botones de interacción en la página
function showOptions(){
    document.getElementById('optionsPage').style.display = 'block';
}
let startButton = document.getElementById("start");
startButton.addEventListener("click", showOptions);

let instructionsButton = document.getElementById('instructions');
instructionsButton.addEventListener('click', showInstructions);

function showInstructions(){
  document.getElementById('Instructions').style.display = 'flex';
}
  
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
// Cifrado
// Declaración de Variables
const offsetEncInfo = document.getElementById('offsetInput');
const goEncode = document.getElementById('goEncode');
const inputText = document.getElementById('inputEncode');

// Interacción con usuaria para evitar errores
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

// Función del botón para ejecutar la función de cifrado
 goEncode.addEventListener('click', encode_start);
  
  function encode_start (){
    let offsetValue = document.getElementById('offsetInput').value;
    let encodeTextValue = document.getElementById('inputEncode').value;
    encodeTextValue = new String(encodeTextValue);
    console.log(encodeTextValue.toUpperCase());
    console.log(offsetValue);
    let codificar = cipher.encode(offsetValue, encodeTextValue);
    document.getElementById("showEncodeResults").innerHTML = codificar;
  }

  // Descifrado
  // Declaración de Variables
  const goDecode = document.getElementById('goDecode');
  const decodeText = document.getElementById('inputDecode');
  const decodeOffset = document.getElementById('decodeOffset');

  // Función del botón para descifrar

  goDecode.addEventListener('click',decode_start)

  function decode_start (){
  let decodeOffsetValue = document.getElementById('decodeOffset').value;
  let decodeTextValue = document.getElementById('inputDecode').value;
  decodeTextValue = new String(decodeTextValue);
  console.log(decodeTextValue.toUpperCase());
  console.log(decodeOffsetValue);
  let descifrar = cipher.decode(decodeOffsetValue, decodeTextValue);
  document.getElementById('showDecodeResults').innerHTML = descifrar;
   }

// Interacción con usuaria para evitar errores

goDecode.addEventListener('click', e => {
  if (decodeOffset.value == '') {
 alert('Ingresa un offset.');
  }
});

goDecode.addEventListener('click', e => {
  if (decodeOffset.value == parseInt('0')) {
 alert('Tu offset debe ser mayor a 0.');
  }
});

goDecode.addEventListener('click', e => {
  if (decodeText.value == '') {
  alert('Ingresa un mensaje.');
  }
});

console.log(cipher);