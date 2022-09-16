var boton_encriptar = document.getElementById("boton-encriptar");
var boton_desencriptar = document.getElementById("boton-desencriptar");
var boton_copiar = document.getElementById("boton-copiar");
var c = 0
var llave = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"

}

var llaveInversa = {
    ai:"a",
    enter:"e",
    imes:"i",
    ober:"o",
    ufat:"u"
}

function ocultarImagen(){
    document.getElementById("munheco").style.display = "none";
    document.getElementById("mensaje-munheco1").style.display = "none";
    document.getElementById("mensaje-munheco2").style.display = "none";


}

function ocultarTexto(){
    document.getElementById("texto-capturado").style.display = "none";
    boton_copiar.style.display = "none"
}


ocultarTexto()

function mostrarTexto(){
    document.getElementById("texto-capturado").style.display = "inline"
    boton_copiar.style.display = "inline"
}

function mostrarImagen(){
    document.getElementById("munheco").style.display = "inline";
    document.getElementById("mensaje-munheco1").style.display = "inline";
    document.getElementById("mensaje-munheco2").style.display = "inline";
}

function animarCuadro(){
    let munheco = document.getElementById("munheco").style.display = "none";
    let msg_01 = document.getElementById("mensaje-munheco1").style.display = "none";
    let msg_02 = document.getElementById("mensaje-munheco2").style.display = "none"; 
}

function encriptar(){
    let textoCapturado = document.getElementById("texto-de-ingreso").value;
    if(textoCapturado == ''){
        mostrarImagen()
        ocultarTexto()
    }
    else{
        let mensaje = textoCapturado.toLowerCase()
        ocultarImagen();
        mostrarTexto();
        let nuevoMensaje = mensaje.replace(/a|e|i|o|u/g, function(matched){
            return llave[matched]
         })
        document.getElementById("texto-capturado").innerHTML = nuevoMensaje;
    }

}

function desencriptar(){
    let textoCapturado = document.getElementById("texto-de-ingreso").value;
    if(textoCapturado == ''){
        mostrarImagen()
        ocultarTexto()
    }
    else{
        let mensaje = textoCapturado.toLowerCase()
        ocultarImagen();
        mostrarTexto();
        let nuevoMensaje = mensaje.replace(/ai|enter|imes|ober|ufat/g, function(matched){
            return llaveInversa[matched]
        })
        document.getElementById("texto-capturado").innerHTML = nuevoMensaje;
        console.log(nuevoMensaje)
    }
}

function copiar(){
    var contenido = document.getElementById('texto-capturado').innerHTML;

    navigator.clipboard.writeText(contenido)
 
    console.log("Copió");

}


boton_desencriptar.onclick = desencriptar;
boton_encriptar.onclick = encriptar;
boton_copiar.onclick = copiar;  