const cipher = {
  // ENCODE
  encode: function (offsetValue, encodeTextValue) {
    // Empezamos con las condiciones para el error
    if (offsetValue == '' || encodeTextValue == '') {
      throw new TypeError();
    }
    if (offsetValue == 0 || encodeTextValue == 0) {
      throw new TypeError();

    }
    if (offsetValue == null || encodeTextValue == []) {
      throw new TypeError();
    }
    // Creamos las variables que van a contener el resultado del cifrado y la variable del espacio entre letras.
    let finalString = '';
    let space;
    // Formula para codificar
    for (let i = 0; i < encodeTextValue.length; i++) {
      if (encodeTextValue[i] != ' ') {
        console.log('letra:', encodeTextValue[i].toUpperCase());
        let response = encodeTextValue[i].toUpperCase().charCodeAt();
        console.log('ascci', response);

        let withoutResidual = (response - 65 + parseInt(offsetValue));
        console.log('resultado sin residuo: ', withoutResidual);
        let finalOperation = (withoutResidual % 26 + 65);
        console.log(finalOperation);
        let encodeLetter = String.fromCharCode([finalOperation]);
        console.log(encodeLetter);
        finalString += encodeLetter;
      } else if (encodeTextValue[i] == ' ') {
        space = encodeTextValue.charCodeAt(32);
        space = String.fromCharCode(32);
        finalString += space;
      }

    }
    return finalString;
  },
  //    DECODE
  decode: function (decodeOffsetValue, decodeTextValue) {
    // Condiciones para el error
    if (decodeOffsetValue == '' || decodeTextValue == '') {
      throw new TypeError();
    }
    if (decodeOffsetValue == 0 || decodeTextValue == 0) {
      throw new TypeError();

    }
    if (decodeOffsetValue == null || decodeTextValue == []) {
      throw new TypeError();
    }
    
    // Variables que almacenará el resultado de Decode

    let finalDecodeString = '';
    let spaceDecode;
    
    // Formula para decodificar
    for (let i = 0; i < decodeTextValue.length; i++) {
      if (decodeTextValue[i] != ' ') {
        console.log('Letras: ', decodeTextValue[i].toUpperCase());
        let decodeResponse = decodeTextValue[i].toUpperCase().charCodeAt();
        console.log('ascci', decodeResponse);

        let decodeWithoutResidual = (decodeResponse + 65 - parseInt(decodeOffsetValue));
        console.log('resultado sin residuo: ', decodeWithoutResidual);
        let finalDecodeOperation = (decodeWithoutResidual % 26 + 65);
        console.log(finalDecodeOperation);
        let decodeLetter = String.fromCharCode([finalDecodeOperation]);
        console.log(decodeLetter);
        finalDecodeString += decodeLetter;
      } else if (decodeTextValue[i] == ' ') {
        spaceDecode = decodeTextValue.charCodeAt(32);
        spaceDecode = String.fromCharCode(32);
        finalDecodeString += spaceDecode;
      }
    }
    return finalDecodeString;
  }
};

export default cipher;