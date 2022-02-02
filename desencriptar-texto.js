var botonDesencriptar = document.querySelector("#btn-desencriptar");

botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var texto = document.querySelector("#input-texto").value;
    var textEnc = document.querySelector("#msg");
    textEnc.value = desencriptarTexto(texto);
    console.log(desencriptarTexto(texto));
    
});

function esA (texto,posicion){
    if (texto[posicion]=="a"){
        if (texto[posicion+1]=="i"){
            return true;
        }return false
    }return false
}
function esE (texto,posicion){
    if (texto[posicion]=="e"){
        if (texto[posicion+1]=="n"){
            if (texto[posicion+2]=="t"){
                if (texto[posicion+3]=="e"){
                    if (texto[posicion+4]=="r"){
                        return true
                    }return false
                }return false
            }return false
        }return false
    }return false
}
function esI (texto,posicion){
    if (texto[posicion]=="i"){
        if (texto[posicion+1]=="m"){
            if (texto[posicion+2]=="e"){
                if (texto[posicion+3]=="s"){
                    return true
                }return false
            }return false
        }return false
    }return false
}
function esO(texto,posicion){
    if (texto[posicion]=="o"){
        if (texto[posicion+1]=="b"){
            if (texto[posicion+2]=="e"){
                if (texto[posicion+3]=="r"){
                    return true
                }return false
            }return false
        }return false
    }return false
}
function esU(texto,posicion){
    if (texto[posicion]=="u"){
        if (texto[posicion+1]=="f"){
            if (texto[posicion+2]=="a"){
                if (texto[posicion+3]=="t"){
                    return true
                }return false
            }return false
        }return false
    }return false
}
function desencriptarTexto(texto){

    var desencriptado = "";
    var i=0;

    while (i<texto.length){
        if(!esA(texto,i)){
            if(!esE(texto,i)){
                if(!esI(texto,i)){
                    if(!esO(texto,i)){
                        if(!esU(texto,i)){
                            desencriptado = desencriptado + texto[i]; i++;
                        } else {desencriptado = desencriptado + "u"; i =i+4;}
                    }else {desencriptado = desencriptado + "o"; i =i+4;}
                }else {desencriptado = desencriptado + "i"; i =i+4;}
            }else {desencriptado = desencriptado + "e"; i =i+5;}
        }else {desencriptado = desencriptado + "a"; i =i+2;}
    }
    return desencriptado;
}
/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/