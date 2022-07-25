const cipher = {
 encode : function (offsetEncInfo, inputText) 
 // Empezamos con las condiciones para el error
 {
  if (offsetEncInfo.value == '' || inputText.value == '' ) {throw new TypeError();
  }
  if (offsetEncInfo.value == 0 || inputText.value == 0) {throw new TypeError();

  }
  if (offsetEncInfo.value == null || inputText.value == []) {throw new TypeError();
   }
  
  for(let i = 0; i < encodeTextValue.length; i++){
   if (encodeTextValue[i] !== '') {
   let response = encodeTextValue.charCodeAt([i]);
   let withoutResidual = (response - 65 + offsetValue);
   let finalOperation = (withoutResidual % 26 + 65);
   console.log(finalOperation);
   let encodeLetter = String.fromCharCode([finalOperation]);
   console.log(encodeLetter);
    }
   }
  
  

 }
    
    
 }

  // function
  // let 
export default cipher;