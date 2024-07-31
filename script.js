function encriptarTexto() {
    let inputText = document.getElementById("inputText").value;
    let encriptado = inputText.replace(/e/g, "enter")
                              .replace(/i/g, "imes")
                              .replace(/a/g, "ai")
                              .replace(/o/g, "ober")
                              .replace(/u/g, "ufat");
    document.getElementById("outputText").value = encriptado;
    mostrarResultado();
}

function desencriptarTexto() {
    let inputText = document.getElementById("inputText").value;
    let desencriptado = inputText.replace(/enter/g, "e")
                                 .replace(/imes/g, "i")
                                 .replace(/ai/g, "a")
                                 .replace(/ober/g, "o")
                                 .replace(/ufat/g, "u");
    document.getElementById("outputText").value = desencriptado;
    mostrarResultado();
}

function copiarTexto() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
}

function mostrarResultado() {
    document.querySelector(".imagen__muneco").style.display = "none";
    document.querySelector(".mensaje__no__encontrado").style.display = "none";
    
    let outputTextarea = document.getElementById("outputText");
    let botonCopiar = document.querySelector(".boton__copiar_texto");
    
    outputTextarea.classList.add("mostrar");
    botonCopiar.disabled = false;
    botonCopiar.classList.add("mostrar");
}
