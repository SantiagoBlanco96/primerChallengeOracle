var botonEncriptar = document.querySelector("#btn-encriptar");

botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    var textEnc = document.querySelector("#msg");
    textEnc.value = encriptarTexto(texto);
    console.log(encriptarTexto(texto));
    
});

function encriptarTexto(texto){

    var letras = texto.split('');
    var encriptado = "";

    for (var i=0; i < letras.length;i++){

        if (letras[i]!="a"){

            if (letras[i]!="e"){

                if (letras[i]!="i"){

                    if (letras[i]!="o"){

                        if (letras[i]!="u"){

                            encriptado = encriptado + letras[i]; 
                
                        }else {encriptado = encriptado  +"ufat"};
                
                    }else {encriptado = encriptado  +"ober"};
                
                }else {encriptado = encriptado  +"imes"};
                
            }else {encriptado = encriptado  +"enter"};
            
        } else {encriptado = encriptado + "ai"};

    }
    return encriptado;
}

/* Reglas de encriptación: 
"e" es convertido para "enter" 
"i" es convertido para "imes"
"a" es convertido para "ai"
"o" es convertido para "ober"
"u" es convertido para "ufat"
Solo letras minusculas
No se permite acentuación de palabras 
*/